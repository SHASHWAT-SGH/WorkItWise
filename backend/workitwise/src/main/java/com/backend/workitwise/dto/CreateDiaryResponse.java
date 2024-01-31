package com.backend.workitwise.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
public class CreateDiaryResponse {
    private Integer diaryId;
    private String name;
    private String description;
}
