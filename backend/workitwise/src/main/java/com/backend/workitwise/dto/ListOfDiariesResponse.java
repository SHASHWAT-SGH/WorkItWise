package com.backend.workitwise.dto;

import com.backend.workitwise.model.Diary;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class ListOfDiariesResponse {
    private Integer size;
    private List<DiaryResponse> diaries;
}