package com.backend.workitwise.controller;

import com.backend.workitwise.exception.UnauthorizedException;
import com.backend.workitwise.model.User;
import com.backend.workitwise.repository.DiaryRepository;
import com.backend.workitwise.service.WorkoutStatsService;
import lombok.RequiredArgsConstructor;
import org.jetbrains.annotations.NotNull;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/workout/statistics/v1")
@RequiredArgsConstructor
public class WorkoutStatsController {

    private final DiaryRepository diaryRepository;
    private final WorkoutStatsService workoutStatsService;

    private void validateDiaryIdWithUser(@NotNull User principal, Integer diaryId){
        diaryRepository.findByUserUserIdAndDiaryId(principal.getUserId(), diaryId).orElseThrow(
                ()-> new UnauthorizedException("You are not authorized to perform this action.")
        );
    }

    @GetMapping("/exercise-counts-grouped-by-category/{diaryId}")
    public ResponseEntity<List<Object>> getExerciseCountByCategory(@NotNull @PathVariable Integer diaryId, Authentication authentication){
        System.out.println("GOT REQUEST");
        User user = (User)authentication.getPrincipal();
        validateDiaryIdWithUser(user, diaryId);

        // user is validated
        List<Object> result = workoutStatsService.getExerciseCountByCategory(diaryId);
        return new ResponseEntity<>(result, HttpStatus.OK);

    }
}
