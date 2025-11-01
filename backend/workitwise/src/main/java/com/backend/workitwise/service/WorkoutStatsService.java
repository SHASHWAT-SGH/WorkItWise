package com.backend.workitwise.service;

import com.backend.workitwise.repository.WorkoutStatsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class WorkoutStatsService {

    private final WorkoutStatsRepository workoutStatsRepository;

    public List<Object> getExerciseCountByCategory(Integer diaryId) {
        return workoutStatsRepository.getCountOfExerciseHistoryInEachGroup(diaryId);
    }
}
