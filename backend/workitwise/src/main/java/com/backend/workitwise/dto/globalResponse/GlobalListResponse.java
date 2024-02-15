package com.backend.workitwise.dto.globalResponse;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
public class GlobalListResponse<T> {
    private Integer size;
    private List<T> data;
}
