import { createContext } from "react";
import { ExerciseType } from "./components/exercise/ExerciseType";
import { SolutionStatus } from "./components/exercise/SolutionStatus";
import { KeyboardType } from "./components/keyboard/KeyboardType";
import { FeedbackTime } from "./components/settings/FeedbackTime";

export const STORED_PARAMETERS = "StoredParameters";
export type StoredParameters = {
  exerciseType: ExerciseType;
  feedbackTime: FeedbackTime;
};

export const AppContext = createContext<{
  settings: {
    storedParameters: StoredParameters;
    setExerciseType: (exerciseType: ExerciseType) => void;
    setFeedbackTime: (feedbackTime: FeedbackTime) => void;
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
    storedParameters: {
      exerciseType: ExerciseType.LETTER_TO_NUMBER,
      feedbackTime: FeedbackTime.MIDDLE,
    },
    setExerciseType: () => {},
    setFeedbackTime: () => {},
    keyboardType: KeyboardType.NUMBER,
    correctSolution: undefined,
  },
  exercise: {
    symbol: "A",
    provideExerciseSolution: () => {},
    solutionStatus: SolutionStatus.NOT_PROVIDED,
  },
});
