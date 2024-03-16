package com.backend.workitwise.repository;

import com.backend.workitwise.dto.ExerciseInformationResponse;
import com.backend.workitwise.model.Exercises;
import com.backend.workitwise.projections.ExerciseInformation;
import com.backend.workitwise.projections.ExerciseInformationBasic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.awt.print.Pageable;
import java.util.List;

@Repository
public interface ExerciseRepository extends JpaRepository<Exercises, Integer> {
    @Query("select e from Exercises e order by e.exerciseId asc")
    List<ExerciseInformation> getAllExercises();

    @Query("select e from Exercises e where e.categoryId.category = :category order by e.exerciseId asc")
    List<ExerciseInformation> getExercisesByCategory(String category);

    @Query("select e from Exercises e where e.exerciseName like %:name% order by e.exerciseId asc")
    List<ExerciseInformation> getExercisesByName(String name);

    @Query("select e from Exercises e where e.categoryId.category = :category order by e.exerciseId asc")
    List<ExerciseInformationBasic> getExercisesBasicDetailsByCategory(String category);

    List<ExerciseInformation> getExercisesByExerciseId(Integer exerciseId);

}