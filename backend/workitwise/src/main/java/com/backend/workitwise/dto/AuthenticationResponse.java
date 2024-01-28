package com.backend.workitwise.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
public class AuthenticationResponse {
    private String token;
    private String firstName;
    private String lastName;
    private String email;
}
