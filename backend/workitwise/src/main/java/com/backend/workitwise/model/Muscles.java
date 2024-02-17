package com.backend.workitwise.model;

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
@Table(name = "muscles")

public class Muscles {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer muscleId;

    @Column(unique = true, nullable = false)
    private String muscle;

    @CreationTimestamp(source = SourceType.DB)
    private LocalDateTime createdAt;

    @CreationTimestamp(source = SourceType.DB)
    private LocalDateTime modifiedAt;
}
