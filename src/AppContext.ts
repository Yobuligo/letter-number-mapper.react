import { createContext } from "react";
import { ExerciseType } from "./components/exercise/ExerciseType";
import { SolutionStatus } from "./components/exercise/SolutionStatus";
import { KeyboardType } from "./components/keyboard/KeyboardType";

export const AppContext = createContext<{
  settings: {
    exerciseType: ExerciseType;
    setExerciseType: (exerciseType: ExerciseType) => void;
    keyboardType: KeyboardType;
    correctSolution?: Boolean;
  };
  exercise: {
    symbol: string;
    provideExerciseSolution: (selectedSymbol: string) => void;
    solutionStatus: SolutionStatus;
  };
}>({
  settings: {
    exerciseType: ExerciseType.NUMBER_TO_LETTER,
    setExerciseType: () => {},
    keyboardType: KeyboardType.LETTER,
    correctSolution: undefined,
  },
  exercise: {
    symbol: "A",
    provideExerciseSolution: () => {},
    solutionStatus: SolutionStatus.NOT_PROVIDED,
  },
});