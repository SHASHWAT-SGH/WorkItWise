package com.backend.workitwise.service;

import com.backend.workitwise.dto.CategoryDto;
import com.backend.workitwise.dto.globalResponse.GlobalListResponse;
import com.backend.workitwise.model.User;
import com.backend.workitwise.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;
    public GlobalListResponse<CategoryDto> getAllCategories() {
        List<CategoryDto> list = categoryRepository.getAllCategories();
        return GlobalListResponse.<CategoryDto>builder()
                .size(list.size())
                .data(list)
                .build();
    }
}
