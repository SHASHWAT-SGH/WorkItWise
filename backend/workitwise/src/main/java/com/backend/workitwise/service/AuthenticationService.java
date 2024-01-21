package com.backend.workitwise.service;

import com.backend.workitwise.dto.AuthenticationResponse;
import com.backend.workitwise.dto.LoginRequest;
import com.backend.workitwise.dto.SignupRequest;
import com.backend.workitwise.enums.Role;
import com.backend.workitwise.exception.UserAlreadyExistsException;
import com.backend.workitwise.model.User;
import com.backend.workitwise.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.jetbrains.annotations.NotNull;
import org.springframework.cglib.core.Local;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(@NotNull SignupRequest request) {
        var userFromDb = userRepository.findByUserEmail(request.getEmail());
        if(userFromDb.isPresent()){
            throw new UserAlreadyExistsException("This email is already registered.");
        }

        LocalDate date = LocalDate.now();
        var user = User
                .builder()
                .firstName(request.getFirstname())
                .lastName((request.getLastname()))
                .userEmail(request.getEmail())
                .userPassword(passwordEncoder.encode(request.getPassword()))
                .userRole(Role.USER)
                .createdAt(date)
                .modifiedAt(date)
                .enabled(true)
                .credentialsExpired(false)
                .accountExpired(false)
                .accountLocked(false)
                .build();
        userRepository.save(user);
        var token = jwtService.generateJwtToken(user);
        return AuthenticationResponse.builder().token(token).build();
    }

    public AuthenticationResponse login(@NotNull LoginRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        var user = userRepository.findByUserEmail(request.getEmail()).orElseThrow(()->new UsernameNotFoundException("Invalid User!"));
        var token = jwtService.generateJwtToken(user);
        return AuthenticationResponse.builder().token(token).build();

    }
}
