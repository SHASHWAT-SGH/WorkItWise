package com.backend.workitwise.controller;

import com.backend.workitwise.dto.ExerciseInformationResponse;
import com.backend.workitwise.dto.globalResponse.GlobalListResponse;
import com.backend.workitwise.model.Exercises;
import com.backend.workitwise.projections.ExerciseInformation;
import com.backend.workitwise.service.ExercisesService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/exercise/v1")
@RequiredArgsConstructor
public class ExerciseController {

    private final ExercisesService exercisesService;

    @GetMapping("/getall")
    public ResponseEntity<GlobalListResponse<ExerciseInformation>> getAllExercises(){
        return new ResponseEntity<>(exercisesService.getAllExercises(), HttpStatus.OK);
    }
}
