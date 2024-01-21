package com.backend.workitwise.controller;

import com.backend.workitwise.dto.AuthenticationResponse;
import com.backend.workitwise.dto.LoginRequest;
import com.backend.workitwise.dto.SignupRequest;
import com.backend.workitwise.service.AuthenticationService;
import com.backend.workitwise.validator.RequestParameterValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth/v1")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;
    private final RequestParameterValidator<SignupRequest> signupRequestDtoValidator;
    private final RequestParameterValidator<LoginRequest> loginRequestDtoValidator;

    @GetMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody LoginRequest request){
        loginRequestDtoValidator.validate(request);
        return new ResponseEntity<>(authenticationService.login(request), HttpStatus.OK);
    }

    @PostMapping("/signup")
    public ResponseEntity<AuthenticationResponse> signup(@RequestBody SignupRequest request) {
        signupRequestDtoValidator.validate(request);
        return new ResponseEntity<>(authenticationService.register(request), HttpStatus.OK);

    }



}
