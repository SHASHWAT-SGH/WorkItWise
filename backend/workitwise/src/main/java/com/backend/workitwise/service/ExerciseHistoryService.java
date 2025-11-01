package com.backend.workitwise.service;

import com.backend.workitwise.dto.AddExerciseHistoryRequest;
import com.backend.workitwise.dto.globalResponse.GlobalListResponse;
import com.backend.workitwise.dto.globalResponse.GlobalResponse;
import com.backend.workitwise.exception.UnauthorizedException;
import com.backend.workitwise.model.Diary;
import com.backend.workitwise.model.ExerciseHistory;
import com.backend.workitwise.model.Exercises;
import com.backend.workitwise.model.User;
import com.backend.workitwise.projections.ExerciseHistoryView;
import com.backend.workitwise.repository.DiaryRepository;
import com.backend.workitwise.repository.ExerciseHistoryRepository;
import com.backend.workitwise.repository.ExerciseRepository;
import lombok.RequiredArgsConstructor;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ExerciseHistoryService {

    private final ExerciseHistoryRepository exerciseHistoryRepository;
    private final ExerciseRepository exerciseRepository;
    private final DiaryRepository diaryRepository;

    private void validateDiaryIdWithUser(@NotNull User principal, Integer diaryId){
        diaryRepository.findByUserUserIdAndDiaryId(principal.getUserId(), diaryId).orElseThrow(
                ()-> new UnauthorizedException("You are not authorized to perform this action.")
        );
    }

    public GlobalResponse addToHistory(AddExerciseHistoryRequest request) {

        Exercises exerciseFromDb =  exerciseRepository.findExercisesByExerciseId(request.getExerciseId());
        Diary diaryFromDb = diaryRepository.findById(request.getDiaryId()).orElse(new Diary());

        ExerciseHistory exerciseHistory = ExerciseHistory
                .builder()
                .exerciseId(exerciseFromDb)
                .isActive(true)
                .setType(request.getSetType())
                .diaryId(diaryFromDb)
                .repetitions(request.getRepetitions())
                .build();
        exerciseHistoryRepository.save(exerciseHistory);
        return GlobalResponse.builder()
                .success(true)
                .message("Added to history.")
                .build();

    }

    public GlobalListResponse<ExerciseHistoryView> getHistory(Integer diaryId) {
        List<ExerciseHistoryView> exercisesFromDb = exerciseHistoryRepository.getExerciseHistoriesByDiaryId_DiaryIdAndIsActiveIsTrue(diaryId);
        return GlobalListResponse.<ExerciseHistoryView>builder()
                .size(exercisesFromDb.size())
                .data(exercisesFromDb)
                .build();
    }

    public GlobalResponse editHistory(User principal, Integer historyId, AddExerciseHistoryRequest request) {
        ExerciseHistory exerciseHistoryFromDb = exerciseHistoryRepository.getExerciseHistoryByHistoryId(historyId);
        validateDiaryIdWithUser(principal, exerciseHistoryFromDb.getDiaryId().getDiaryId());
        exerciseHistoryFromDb.setRepetitions(request.getRepetitions());
        exerciseHistoryFromDb.setSetType(request.getSetType());
        exerciseHistoryRepository.save(exerciseHistoryFromDb);
        return GlobalResponse.builder()
                .success(true)
                .message("Updated history.")
                .build();
    }

    public GlobalResponse deleteHistory(User principal, Integer historyId) {
        ExerciseHistory exerciseHistoryFromDb = exerciseHistoryRepository.getExerciseHistoryByHistoryId(historyId);
        validateDiaryIdWithUser(principal, exerciseHistoryFromDb.getDiaryId().getDiaryId());
        exerciseHistoryFromDb.setIsActive(false);
        exerciseHistoryRepository.save(exerciseHistoryFromDb);
        return GlobalResponse.builder()
                .success(true)
                .message("Deleted History.")
                .build();
    }

    public GlobalListResponse<ExerciseHistory> getPaginatedHistory(Integer pageNumber, Integer pageSize) {

        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        List<ExerciseHistory> list = exerciseHistoryRepository.findAll(pageable).getContent();
        return GlobalListResponse.<ExerciseHistory>builder()
                .size(list.size())
                .data(list)
                .build();
    }
}
