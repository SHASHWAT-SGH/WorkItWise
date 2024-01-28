package com.backend.workitwise.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
public class SignupRequest {
    @Size(min = 3, message = "First name too small.")
    @Size(max = 15, message = "First name too big.")
    @NotNull(message = "Required parameter.")
    @Pattern(regexp = "^[a-zA-Z]*$", message = "Only alphanumeric characters allowed.")
    private String firstname;

    @Size(min = 3, message = "Last name too small.")
    @Size(max = 15, message = "Last name too big.")
    @Pattern(regexp = "^[a-zA-Z]*$", message = "Only alphanumeric characters allowed.")
    private String lastname;

    @Email(message = "Invalid Email.")
    @NotNull(message = "Required parameter.")
    private String email;

    @Size(min = 8, message = "Password should have at least 8 characters.")
    @NotNull(message = "Required parameter.")
    @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}$", message = "Password must contain at least 1 uppercase, 1 lowercase, 1 digit and 1 special symbol.")
    private String password;
}
