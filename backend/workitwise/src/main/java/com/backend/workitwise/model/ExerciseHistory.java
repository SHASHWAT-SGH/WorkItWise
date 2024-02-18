package com.backend.workitwise.model;

import com.backend.workitwise.enums.SetType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.SourceType;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "exercise_history")
public class ExerciseHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer historyId;

    @ManyToOne
    @JoinColumn(name = "diary_id")
    private Diary diaryId;

    @CreationTimestamp(source = SourceType.DB)
    private LocalDateTime createdAt;

    @CreationTimestamp(source = SourceType.DB)
    private LocalDateTime modifiedAt;

    @ManyToOne
    @JoinColumn(name = "exercise_id")
    private Exercises exerciseId;

    @Column(nullable = false)
    private String repetitions;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private SetType setType;

    @Column(nullable = false)
    private Boolean isActive;
}