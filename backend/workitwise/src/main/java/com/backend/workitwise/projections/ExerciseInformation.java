package com.backend.workitwise.projections;

import java.util.Set;

public interface ExerciseInformation {
    Integer getExerciseId();
    String getExerciseName();
    CategoryView getCategoryId();
    String getEquipment();
    String getGifUrl();
    MuscleView getTargetMuscle();
    Set<MuscleView> getSecondaryMuscles();
    String getInstructions();
    UnitView getUnitId();

}
