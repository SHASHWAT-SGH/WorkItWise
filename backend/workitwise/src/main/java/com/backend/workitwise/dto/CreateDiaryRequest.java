package com.backend.workitwise.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CreateDiaryRequest {

    @NotNull(message = "Required parameter.")
    private String name;

    @NotNull(message = "Required parameter.")
    private String description;
}
