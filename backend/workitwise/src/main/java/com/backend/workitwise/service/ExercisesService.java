package com.backend.workitwise.service;

import com.backend.workitwise.dto.ExerciseInformationResponse;
import com.backend.workitwise.dto.globalResponse.GlobalListResponse;
import com.backend.workitwise.model.Exercises;
import com.backend.workitwise.projections.ExerciseInformation;
import com.backend.workitwise.repository.ExerciseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ExercisesService {
    private final ExerciseRepository exerciseRepository;

    public GlobalListResponse<ExerciseInformation> getAllExercises() {
        List<ExerciseInformation> list = exerciseRepository.getAllExercises();
        return GlobalListResponse.<ExerciseInformation>builder().size(list.size()).data(list).build();
    }
}
