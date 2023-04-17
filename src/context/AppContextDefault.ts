import { ExerciseType } from "../components/exercise/ExerciseType";
import { SolutionStatus } from "../components/exercise/SolutionStatus";
import { KeyboardType } from "../components/keyboard/KeyboardType";
import { FeedbackTime } from "../components/settings/FeedbackTime";
import { Stopwatch } from "../services/Stopwatch";
import { StoredParameters } from "./../AppContext";
import { IAppContext } from "./IAppContext";

export const AppContextDefault: IAppContext = {
  settings: {
    storedParameters: {
      exerciseType: ExerciseType.LETTER_TO_NUMBER,
      feedbackTime: FeedbackTime.MIDDLE,
      showSolvingTimeList: true,
    } as StoredParameters,
    setExerciseType: (exerciseType: ExerciseType) => {},
    setFeedbackTime: (feedbackTime: FeedbackTime) => {},
    setShowSolvingTimeList: (showSolvingTimeList: boolean) => {},
    setShowSolvingTime: (showSolvingTime: boolean) => {},
    keyboardType: KeyboardType.NUMBER,
    correctSolution: undefined,
    onResetProgress: () => {},
  },
  exercise: {
    symbol: "A",
    provideExerciseSolution: () => {},
    solutionStatus: SolutionStatus.NOT_PROVIDED,
    solvingTimes: [],
  },
  stopwatch: new Stopwatch(),
};
