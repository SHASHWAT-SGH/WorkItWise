package com.backend.workitwise.dto.globalResponse;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
public class GlobalResponse {
    private Boolean success;
    private String message;
}
