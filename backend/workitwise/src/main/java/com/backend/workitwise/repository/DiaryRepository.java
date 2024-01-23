package com.backend.workitwise.repository;

import com.backend.workitwise.model.Diary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DiaryRepository extends JpaRepository<Diary, Integer> {
    Optional<Diary> findByUserUserIdAndDiaryId(Integer userUserId, Integer diaryId);
    @Modifying
    @Query("update Diary set isActive = false where diaryId=?1")
    void updateIsActiveToFalse(Integer diaryId);
}
