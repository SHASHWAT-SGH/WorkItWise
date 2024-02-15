package com.backend.workitwise.repository;

import com.backend.workitwise.dto.CategoryDto;
import com.backend.workitwise.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {
    @Query("select new com.backend.workitwise.dto.CategoryDto(c.categoryId, c.category, c.imageUrl) from Category c")
    List<CategoryDto> getAllCategories();
}
