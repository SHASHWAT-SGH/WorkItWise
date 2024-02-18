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
import java.util.List;
import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "exercises")
public class Exercises {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer exerciseId;

    @Column(nullable = false)
    private String exerciseName;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category categoryId;

    private String equipment;

    private String gifUrl;

    @ManyToOne
    @JoinColumn(name = "target_muscle_id")
    private Muscles targetMuscle;

    @ManyToMany
    @JoinTable(
            name = "exercise_secondary_muscles",
            joinColumns = @JoinColumn(name = "exercise_id"),
            inverseJoinColumns = @JoinColumn(name = "muscle_id")
    )
    private Set<Muscles> secondaryMuscles;

    @Column(columnDefinition = "json")
    private String instructions;

    @ManyToOne
    @JoinColumn(name = "unit_id")
    private Units unitId;

    @CreationTimestamp(source = SourceType.DB)
    private LocalDateTime createdAt;

    @CreationTimestamp(source = SourceType.DB)
    private LocalDateTime modifiedAt;

    @Column(nullable = false)
    private Boolean isActive;

}
