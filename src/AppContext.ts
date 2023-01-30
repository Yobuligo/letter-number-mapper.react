import { createContext } from "react";
import { ExerciseType } from "./components/exercise/ExerciseType";
import { SolutionStatus } from "./components/exercise/SolutionStatus";
import { KeyboardType } from "./components/keyboard/KeyboardType";

export const STORED_SETTINGS = "StoredSettings";
export type StoredSettings = {
  exerciseType: ExerciseType;
};

export const AppContext = createContext<{
  storedSettings: StoredSettings;
  settings: {
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
  storedSettings: {
    exerciseType: ExerciseType.LETTER_TO_NUMBER,
  },
  settings: {
    setExerciseType: () => {},
    keyboardType: KeyboardType.NUMBER,
    correctSolution: undefined,
  },
  exercise: {
    symbol: "A",
    provideExerciseSolution: () => {},
    solutionStatus: SolutionStatus.NOT_PROVIDED,
  },
});
