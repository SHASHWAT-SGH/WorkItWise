package com.backend.workitwise.dto;

import com.backend.workitwise.model.Muscles;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Set;

@Data
@Builder
public class ExerciseInformationResponse {
    private Integer exerciseId;
    private String exerciseName;
//    private MuscleInformationDto targetMuscle;
//    private String unit;
//    private String equipment;
//    private String gifUrl;
//    private String instructions;
//    private CategoryDto categoryInfo;
    private Set<Muscles> secondaryMuscle;

    public ExerciseInformationResponse(Integer exerciseId, String exerciseName, Set<Muscles> secondaryMuscle) {
        this.exerciseId = exerciseId;
        this.exerciseName = exerciseName;
        this.secondaryMuscle = secondaryMuscle;
    }
}

//public class ExerciseInformationResponse {
//    private Integer exerciseId;
//    private String exerciseName;
//    private MuscleInformationDto targetMuscle;
//    private String unit;
//    private String equipment;
//    private String gifUrl;
//    private String instructions;
//    private CategoryDto categoryInfo;
//    private MuscleInformationDto secondaryMuscle;
//
//    public ExerciseInformationResponse(Integer exerciseId, String exerciseName,
//                                       Integer targetMuscleId, String targetMuscleName,
//                                       String unit ,
//                                       String equipment,
//                                       String gifUrl,
//                                       String instructions,
//                                       Integer categoryId, String category, String imageUrl,
//                                       Integer secondaryMuscleId, String secondaryMuscleName) {
//        this.exerciseId = exerciseId;
//        this.exerciseName = exerciseName;
//        this.targetMuscle = MuscleInformationDto.builder()
//                .muscleId(targetMuscleId)
//                .muscle(targetMuscleName)
//                .build();
//        this.unit = unit;
//        this.equipment = equipment;
//        this.gifUrl = gifUrl;
//        this.instructions = instructions;
//        this.categoryInfo = CategoryDto.builder()
//                .categoryId(categoryId)
//                .category(category)
//                .imageUrl(imageUrl)
//                .build();
//        this.secondaryMuscle = MuscleInformationDto.builder().muscleId(secondaryMuscleId).muscle(secondaryMuscleName).build();
//    }
//}
