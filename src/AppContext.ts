import { createContext } from "react";
import { ExerciseType } from "./components/exercise/ExerciseType";
import { SolutionStatus } from "./components/exercise/SolutionStatus";
import { KeyboardType } from "./components/keyboard/KeyboardType";
import { FeedbackTime } from "./components/settings/FeedbackTime";
import { IStopwatch } from "./services/IStopwatch";
import { Stopwatch } from "./services/Stopwatch";

export const STORED_PARAMETERS = "StoredParameters";
export type StoredParameters = {
  exerciseType: ExerciseType;
  feedbackTime: FeedbackTime;
  showSolvingTimeList: boolean;
};

export const AppContext = createContext<{
  settings: {
    storedParameters: StoredParameters;
    setExerciseType: (exerciseType: ExerciseType) => void;
    setFeedbackTime: (feedbackTime: FeedbackTime) => void;
    setShowSolvingTimeList: (showSolvingTimeList: boolean) => void;
    keyboardType: KeyboardType;
    correctSolution?: Boolean;
  };
  exercise: {
    symbol: string;
    provideExerciseSolution: (selectedSymbol: string) => void;
    solutionStatus: SolutionStatus;
    solvingTimes: number[];
  };
  stopwatch: IStopwatch;
}>({
  settings: {
    storedParameters: {
      exerciseType: ExerciseType.LETTER_TO_NUMBER,
      feedbackTime: FeedbackTime.MIDDLE,
      showSolvingTimeList: true,
    },
    setExerciseType: () => {},
    setFeedbackTime: () => {},
    setShowSolvingTimeList: () => {},
    keyboardType: KeyboardType.NUMBER,
    correctSolution: undefined,
  },
  exercise: {
    symbol: "A",
    provideExerciseSolution: () => {},
    solutionStatus: SolutionStatus.NOT_PROVIDED,
    solvingTimes: [],
  },
  stopwatch: new Stopwatch(),
});
