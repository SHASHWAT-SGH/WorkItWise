package com.backend.workitwise.controller;

import com.backend.workitwise.dto.ExerciseInformationResponse;
import com.backend.workitwise.dto.globalResponse.GlobalListResponse;
import com.backend.workitwise.model.Exercises;
import com.backend.workitwise.projections.ExerciseInformation;
import com.backend.workitwise.projections.ExerciseInformationBasic;
import com.backend.workitwise.service.ExercisesService;
import lombok.RequiredArgsConstructor;
import org.jetbrains.annotations.NotNull;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    @GetMapping("/get/exercise/by/category/{category}")
    public ResponseEntity<GlobalListResponse<ExerciseInformation>> getExerciseByCategory(
            @NotNull @PathVariable String category
    ){
        return new ResponseEntity<>(exercisesService.getExerciseByCategory(category), HttpStatus.OK);
    }

    @GetMapping("/get/exercise/by/name/like/{name}")
    public ResponseEntity<GlobalListResponse<ExerciseInformation>> getExerciseByName(@NotNull @PathVariable String name){
        return new ResponseEntity<>(exercisesService.getExerciseByName(name), HttpStatus.OK);
    }

    @GetMapping("/get/exercise/basic/by/category/{category}")
    public ResponseEntity<GlobalListResponse<ExerciseInformationBasic>> getExerciseBasicDetailsByCategory(@PathVariable String category){
        return new ResponseEntity<>(exercisesService.getExerciseBasicDetailsByCategory(category), HttpStatus.OK);
    }

    @GetMapping("/get/exercise/by/id/{exerciseId}")
    public ResponseEntity<ExerciseInformation> getExerciseDetailsByExerciseId(@PathVariable Integer exerciseId){
        return new ResponseEntity<>(exercisesService.getExerciseDetailsByExerciseId(exerciseId), HttpStatus.OK);
    }
}
