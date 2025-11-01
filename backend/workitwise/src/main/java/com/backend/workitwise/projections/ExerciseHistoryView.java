package com.backend.workitwise.projections;

import com.backend.workitwise.enums.SetType;

public interface ExerciseHistoryView {

    Integer getHistoryId();
    DiaryView getDiaryId();
    ExerciseInformationBasic getExerciseId();

    String getRepetitions();

    SetType getSetType();

    interface DiaryView{
        Integer getDiaryId();
    }
}
