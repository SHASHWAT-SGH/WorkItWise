package com.backend.workitwise.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
public class LoginRequest {
    @Email(message = "Invalid Email.")
    @NotNull(message = "Required parameter.")
    private String email;

    @NotNull(message = "Required parameter.")
    private String password;
}
