package com.backend.workitwise.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "exercises")
public class Exercises {
    @Id
    @GeneratedValue
    private Integer exerciseId;

    @Column(nullable = false)
    private String exerciseName;

    @OneToOne
    private Category categoryId;

    private String equipment;

    private String gifUrl;

    private String targetMuscle;

    @ElementCollection
    private List<String> secondaryMuscles;

    @ElementCollection
    private List<String> instructions;

    @OneToOne
    private Units unitId;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime modifiedAt;
}
