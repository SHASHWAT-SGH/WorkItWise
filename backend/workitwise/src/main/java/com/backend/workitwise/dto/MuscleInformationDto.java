package com.backend.workitwise.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class MuscleInformationDto {
    private Integer muscleId;
    private String muscle;
}
