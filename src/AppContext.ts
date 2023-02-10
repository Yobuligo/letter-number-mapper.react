import { createContext } from "react";
import { ExerciseType } from "./components/exercise/ExerciseType";
import { SolutionStatus } from "./components/exercise/SolutionStatus";
import { KeyboardType } from "./components/keyboard/KeyboardType";
import { FeedbackTime } from "./components/settings/FeedbackTime";
import { IAppContext } from "./IAppContext";
import { Stopwatch } from "./services/Stopwatch";

export const STORED_PARAMETERS = "StoredParameters";
export type StoredParameters = {
  exerciseType: ExerciseType;
  feedbackTime: FeedbackTime;
  showSolvingTimeList: boolean;
};

export const AppContext = createContext<IAppContext>({
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
