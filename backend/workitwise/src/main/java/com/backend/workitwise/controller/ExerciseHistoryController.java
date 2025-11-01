package com.backend.workitwise.controller;

import com.backend.workitwise.dto.AddExerciseHistoryRequest;
import com.backend.workitwise.dto.globalResponse.GlobalListResponse;
import com.backend.workitwise.dto.globalResponse.GlobalResponse;
import com.backend.workitwise.exception.UnauthorizedException;
import com.backend.workitwise.model.ExerciseHistory;
import com.backend.workitwise.model.User;
import com.backend.workitwise.projections.ExerciseHistoryView;
import com.backend.workitwise.repository.DiaryRepository;
import com.backend.workitwise.service.ExerciseHistoryService;
import com.backend.workitwise.validator.RequestParameterValidator;
import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.RequiredArgsConstructor;
import org.jetbrains.annotations.NotNull;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/exercise-history/v1")
@RequiredArgsConstructor
public class ExerciseHistoryController {

    private final DiaryRepository diaryRepository;

    private void validateDiaryIdWithUser(@NotNull User principal, Integer diaryId){
        diaryRepository.findByUserUserIdAndDiaryId(principal.getUserId(), diaryId).orElseThrow(
                ()-> new UnauthorizedException("You are not authorized to perform this action.")
        );
    }

    private final RequestParameterValidator<AddExerciseHistoryRequest> addExerciseHistoryRequestValidator;
    private final ExerciseHistoryService exerciseHistoryService;

    @PostMapping("/add-to-history")
    public ResponseEntity<GlobalResponse> addToHistory(@RequestBody AddExerciseHistoryRequest request, @NotNull Authentication authentication){
        addExerciseHistoryRequestValidator.validate(request);
        User principal = (User)authentication.getPrincipal();
        validateDiaryIdWithUser(principal, request.getDiaryId());
        return new ResponseEntity<>(exerciseHistoryService.addToHistory(request), HttpStatus.OK);
    }

    @GetMapping("/get-my-history/{diaryId}")
    public ResponseEntity<GlobalListResponse<ExerciseHistoryView>> getHistory(@PathVariable Integer diaryId, @NotNull Authentication authentication){
        User principal = (User)authentication.getPrincipal();
        validateDiaryIdWithUser(principal, diaryId);
        return new ResponseEntity<>(exerciseHistoryService.getHistory(diaryId), HttpStatus.OK);
    }

    @GetMapping("/get-my-history/{diaryId}/{pageNumber}/{pageSize}")
    public ResponseEntity<GlobalListResponse<ExerciseHistory>> getPaginatedHistory(
            @PathVariable Integer diaryId,
            @PathVariable Integer pageNumber,
            @PathVariable Integer pageSize,
            @NotNull Authentication authentication
    ){
        User principal = (User) authentication.getPrincipal();
        validateDiaryIdWithUser(principal, diaryId);
        return new ResponseEntity<>(exerciseHistoryService.getPaginatedHistory(pageNumber, pageSize), HttpStatus.OK);
    }


//    NEED TO FIX ************************************ EDIT *******************
    @PostMapping("/edit/history/{historyId}")
    public ResponseEntity<GlobalResponse> editHistory(@PathVariable Integer historyId, AddExerciseHistoryRequest request ,@NotNull Authentication authentication){
        User principal = (User)authentication.getPrincipal();
        return new ResponseEntity<>(exerciseHistoryService.editHistory(principal, historyId, request), HttpStatus.OK);
    }

    @PostMapping("/delete/{historyId}")
    public ResponseEntity<GlobalResponse> deleteHistory(@PathVariable @NotNull Integer historyId, @NotNull Authentication authentication){
        User principal = (User)authentication.getPrincipal();
        return new ResponseEntity<>(exerciseHistoryService.deleteHistory(principal, historyId), HttpStatus.OK);

    }
}
