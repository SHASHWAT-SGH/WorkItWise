package com.backend.workitwise.controller;

import com.backend.workitwise.dto.*;
import com.backend.workitwise.dto.globalResponse.GlobalResponse;
import com.backend.workitwise.model.User;
import com.backend.workitwise.service.DiaryService;
import lombok.RequiredArgsConstructor;
import org.jetbrains.annotations.NotNull;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/diary/v1")
@RequiredArgsConstructor
public class DiaryController {

    private final DiaryService diaryService;

    @PostMapping("/create")
    public ResponseEntity<CreateDiaryResponse> createDiary(@RequestBody CreateDiaryRequest request, @NotNull Authentication authentication){
        User principal = (User)authentication.getPrincipal();
        return new ResponseEntity<>(diaryService.createDiary(request, principal), HttpStatus.CREATED);
    }

    @PostMapping("/delete/{diaryId}")
    public ResponseEntity<GlobalResponse> deleteDiary(@PathVariable Integer diaryId, @NotNull Authentication authentication){
        User principal = (User)authentication.getPrincipal();
        return new ResponseEntity<>(diaryService.deleteDiary(diaryId, principal), HttpStatus.OK);
    }

    @PostMapping("/edit")
    public ResponseEntity<CreateDiaryResponse> editDiary(@RequestBody EditDiaryRequest request, @NotNull Authentication authentication){
        User principal = (User)authentication.getPrincipal();
        return new ResponseEntity<>(diaryService.editDiary(request, principal), HttpStatus.OK);
    }

    @GetMapping("/getalldiaries")
    public ResponseEntity<ListOfDiariesResponse> getAllDiaries(@NotNull Authentication authentication){
        User principal = (User)authentication.getPrincipal();
        return new ResponseEntity<>(diaryService.getAllDiaries(principal), HttpStatus.OK);
    }
}
