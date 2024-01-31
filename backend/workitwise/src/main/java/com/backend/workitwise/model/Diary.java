package com.backend.workitwise.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
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
    @GeneratedValue
    private Integer diaryId;

    @ManyToOne
    private User user;

    @Column(nullable = false)
    private String diaryName;

    @Column(nullable = false)
    private String diaryDescription;

    @Column(nullable = false)
    private Boolean isActive;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime modifiedAt;

}
