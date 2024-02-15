package com.backend.workitwise.service;

import com.backend.workitwise.dto.*;
import com.backend.workitwise.dto.globalResponse.GlobalResponse;
import com.backend.workitwise.exception.UnauthorizedException;
import com.backend.workitwise.model.Diary;
import com.backend.workitwise.model.User;
import com.backend.workitwise.repository.DiaryRepository;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DiaryService {

    private final DiaryRepository diaryRepository;
    private final EntityManager entityManager;

    private void validateDiaryIdWithUser(@NotNull User principal, Integer diaryId){
        diaryRepository.findByUserUserIdAndDiaryId(principal.getUserId(), diaryId).orElseThrow(
                ()-> new UnauthorizedException("You are not authorized to perform this action.")
        );
    }

    public CreateDiaryResponse createDiary(@NotNull CreateDiaryRequest request, User principal) {
        Diary diary = Diary
                .builder()
                .user(principal)
                .diaryName(request.getName())
                .diaryDescription(request.getDescription())
                .isActive(true)
                .build();
        Diary createdDiary = diaryRepository.save(diary);
        return CreateDiaryResponse
                .builder()
                .name(createdDiary.getDiaryName())
                .diaryId(createdDiary.getDiaryId())
                .description(createdDiary.getDiaryDescription())
                .build();
    }

    public GlobalResponse deleteDiary(Integer diaryId, User principal) {
        validateDiaryIdWithUser(principal, diaryId);
        diaryRepository.updateIsActiveToFalse(diaryId);
        return GlobalResponse
                .builder()
                .success(true)
                .message("Diary deleted successfully.")
                .build();
    }

    @Transactional
    public CreateDiaryResponse editDiary(@NotNull EditDiaryRequest request, User principal) {
        validateDiaryIdWithUser(principal, request.getDiaryId());
//        return s 1 if successfully updated
        int isUpdated = diaryRepository.updateDiary(request.getDiaryId(), request.getName(), request.getDescription());

        Diary updatedDiary = diaryRepository.findById(request.getDiaryId()).orElse(new Diary());
        entityManager.flush();
        entityManager.refresh(updatedDiary);
        return CreateDiaryResponse
                .builder()
                .diaryId(updatedDiary.getDiaryId())
                .name(updatedDiary.getDiaryName())
                .description(updatedDiary.getDiaryDescription())
                .build();
    }

    public ListOfDiariesResponse getAllDiaries(@NotNull User principal) {
        List<DiaryResponse> diaryList = diaryRepository.findDiariesByUserUserId(principal.getUserId());
        return ListOfDiariesResponse
                .builder()
                .size(diaryList.size())
                .diaries(diaryList)
                .build();
    }
}
