package com.backend.workitwise.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@Builder
@AllArgsConstructor
public class DiaryResponse {
    private Integer diaryId;
    private String diaryName;
    private String diaryDescription;
}
