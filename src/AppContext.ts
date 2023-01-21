import { createContext } from "react";
import { ExerciseType } from "./components/exercise/ExerciseType";
import { KeyboardType } from "./components/keyboard/KeyboardType";

export const AppContext = createContext<{
  settings: {
    exerciseType: ExerciseType;
    setExerciseType: (exerciseType: ExerciseType) => void;
    keyboardType: KeyboardType;
    symbol: string;
    solveExercise: (selectedSymbol: string) => void;
    correctSolution?: Boolean;
  };
}>({
  settings: {
    exerciseType: ExerciseType.NUMBER_TO_LETTER,
    setExerciseType: () => {},
    keyboardType: KeyboardType.LETTER,
    symbol: "A",
    solveExercise: () => {},
    correctSolution: undefined,
  },
});
