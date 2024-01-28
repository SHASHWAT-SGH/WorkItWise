package com.backend.workitwise.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class EditDiaryRequest {

    @NotNull(message = "Required parameter.")
    private Integer diaryId;

    @NotNull(message = "Required parameter.")
    private String name;

    @NotNull(message = "Required parameter.")
    private String description;
}
