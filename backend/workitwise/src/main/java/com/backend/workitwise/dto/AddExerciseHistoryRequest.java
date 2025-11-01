package com.backend.workitwise.dto;

import com.backend.workitwise.enums.SetType;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AddExerciseHistoryRequest {

    @NotNull(message = "Required parameter.")
    Integer diaryId;

    @NotNull(message = "Required parameter.")
    Integer exerciseId;

    @NotNull(message = "Required parameter.")
    String repetitions;

    @NotNull(message = "Required parameter.")
    SetType setType;

}
