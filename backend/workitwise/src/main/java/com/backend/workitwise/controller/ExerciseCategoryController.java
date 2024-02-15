package com.backend.workitwise.controller;

import com.backend.workitwise.dto.CategoryDto;
import com.backend.workitwise.dto.globalResponse.GlobalListResponse;
import com.backend.workitwise.model.User;
import com.backend.workitwise.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.jetbrains.annotations.NotNull;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/category/v1")
@RequiredArgsConstructor
public class ExerciseCategoryController {

    private final CategoryService categoryService;

    @GetMapping("/getallcategories")
    public ResponseEntity<GlobalListResponse<CategoryDto>> getAllCategories(){
        return new ResponseEntity<>(categoryService.getAllCategories(), HttpStatus.OK);
    }
}
