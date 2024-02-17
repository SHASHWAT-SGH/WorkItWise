package com.backend.workitwise.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.SourceType;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user_diaries", uniqueConstraints = @UniqueConstraint(columnNames = {"user_user_id", "diary_name"}))
public class Diary {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer diaryId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(nullable = false)
    private String diaryName;

    @Column(nullable = false)
    private String diaryDescription;

    @Column(nullable = false)
    private Boolean isActive;

    @CreationTimestamp(source = SourceType.DB)
    private LocalDateTime createdAt;

    @CreationTimestamp(source = SourceType.DB)
    private LocalDateTime modifiedAt;

}
