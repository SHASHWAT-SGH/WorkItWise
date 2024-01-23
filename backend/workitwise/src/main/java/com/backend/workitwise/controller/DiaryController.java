package com.backend.workitwise.controller;

import com.backend.workitwise.dto.CreateDiaryRequest;
import com.backend.workitwise.dto.CreateDiaryResponse;
import com.backend.workitwise.dto.GlobalResponse;
import com.backend.workitwise.model.User;
import com.backend.workitwise.service.DiaryService;
import lombok.RequiredArgsConstructor;
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
    public ResponseEntity<CreateDiaryResponse> createDiary(@RequestBody CreateDiaryRequest request, Authentication authentication){
        User principal = (User)authentication.getPrincipal();
        return new ResponseEntity<>(diaryService.createDiary(request, principal), HttpStatus.CREATED);
    }

    @PostMapping("/delete/{diaryId}")
    public ResponseEntity<GlobalResponse> deleteDiary(@PathVariable Integer diaryId, Authentication authentication){
        System.out.println("0000000");
        System.out.println(diaryId);
        User principal = (User)authentication.getPrincipal();
        return new ResponseEntity<>(diaryService.deleteDiary(diaryId, principal), HttpStatus.OK);

    }
}
