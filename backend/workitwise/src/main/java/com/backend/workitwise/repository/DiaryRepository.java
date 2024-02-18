package com.backend.workitwise.repository;

import com.backend.workitwise.dto.CreateDiaryResponse;
import com.backend.workitwise.dto.DiaryResponse;
import com.backend.workitwise.model.Diary;
import org.hibernate.annotations.Polymorphism;
import org.hibernate.annotations.PolymorphismType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public interface DiaryRepository extends JpaRepository<Diary, Integer> {
    Optional<Diary> findByUserUserIdAndDiaryId(Integer userUserId, Integer diaryId);

//    @Query("select diaryId, diaryName, diaryDescription from Diary where user.userId=:userUserId and isActive=true")
//    List<DiaryResponse> getAllDiaries(Integer userUserId);

    List<DiaryResponse> findDiariesByUserUserId(Integer userUserId);

    List<DiaryResponse> findDiariesByUserUserIdAndIsActiveIsTrue(Integer userId);

    @Transactional
    @Modifying
    @Query("update Diary set isActive = false where diaryId=:diaryId")
    void updateIsActiveToFalse(Integer diaryId);

    @Transactional
    @Modifying
    @Query("update Diary set diaryName=:name, diaryDescription=:description where diaryId=:diaryId")
    int updateDiary(Integer diaryId, String name, String description);


}
