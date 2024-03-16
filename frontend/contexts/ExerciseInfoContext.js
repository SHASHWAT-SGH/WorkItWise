import { createContext, useState } from "react";

const ExerciseInfoContext = createContext();

const ExerciseInfoProvider = ({ children }) => {
  const [exerciseInformation, setExerciseInformation] = useState(null);
  const [categoryInformation, setCategoryInformation] = useState(null);
  return (
    <ExerciseInfoContext.Provider
      value={{
        exerciseInformation,
        setExerciseInformation,
        categoryInformation,
        setCategoryInformation,
      }}
    >
      {children}
    </ExerciseInfoContext.Provider>
  );
};

export { ExerciseInfoContext, ExerciseInfoProvider };
