package com.backend.workitwise.repository;

import com.backend.workitwise.model.ExerciseHistory;
import com.backend.workitwise.projections.ExerciseHistoryView;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExerciseHistoryRepository extends JpaRepository<ExerciseHistory, Integer> {
    List<ExerciseHistoryView> getExerciseHistoriesByDiaryId_DiaryIdAndIsActiveIsTrue(Integer diaryId);

    ExerciseHistory getExerciseHistoryByHistoryId(Integer historyId);

}
