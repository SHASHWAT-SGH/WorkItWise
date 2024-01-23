package com.backend.workitwise.service;

import com.backend.workitwise.dto.CreateDiaryRequest;
import com.backend.workitwise.dto.CreateDiaryResponse;
import com.backend.workitwise.dto.GlobalResponse;
import com.backend.workitwise.exception.UnauthorizedException;
import com.backend.workitwise.model.Diary;
import com.backend.workitwise.model.User;
import com.backend.workitwise.repository.DiaryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DiaryService {

    private final DiaryRepository diaryRepository;
    public CreateDiaryResponse createDiary(CreateDiaryRequest request, User principal) {
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
        Diary user = diaryRepository.findByUserUserIdAndDiaryId(principal.getUserId(), diaryId).orElseThrow(
                ()-> new UnauthorizedException("You are not authorized to perform this action.")
        );
        diaryRepository.updateIsActiveToFalse(diaryId);
        return GlobalResponse
                .builder()
                .success(true)
                .message("Diary deleted successfully.")
                .build();
    }
}
