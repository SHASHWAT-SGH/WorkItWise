package com.backend.workitwise.repository;

import com.backend.workitwise.model.ExerciseHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WorkoutStatsRepository extends JpaRepository<ExerciseHistory, Integer> {

    @Query("select e.exerciseId.categoryId.category, count(e) from ExerciseHistory e where e.diaryId.diaryId=:diaryId and e.isActive = true group by e.exerciseId.categoryId.category order by e.exerciseId.categoryId.category")
    List<Object> getCountOfExerciseHistoryInEachGroup(Integer diaryId);

}
