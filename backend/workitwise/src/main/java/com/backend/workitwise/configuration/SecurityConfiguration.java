package com.backend.workitwise.configuration;

//import com.backend.workitwise.filter.DiaryFilter;
import com.backend.workitwise.filter.JwtAuthenticationFilter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@RequiredArgsConstructor
@EnableWebSecurity
public class SecurityConfiguration {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    private final AuthenticationProvider authenticationProvider;
//    private final DiaryFilter diaryFilter;
    @Bean
    public SecurityFilterChain securityFilterChain(@NonNull HttpSecurity http) throws Exception {
        http.csrf()
                .disable().authorizeHttpRequests()
                .requestMatchers("/auth/v1/**", "/media/v1/**")
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
//                .addFilterAfter(diaryFilter, JwtAuthenticationFilter.class);

        return http.build();
    }
}
