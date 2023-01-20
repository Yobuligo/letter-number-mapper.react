import { createContext } from "react";
import { ExerciseType } from "./components/exercise/ExerciseType";

export const AppContext = createContext<{
  settings: {
    exerciseType: ExerciseType;
    setExerciseType: (exerciseType: ExerciseType) => void;
  };
}>({
  settings: {
    exerciseType: ExerciseType.NUMBER_TO_LETTER,
    setExerciseType: () => {},
  },
});
