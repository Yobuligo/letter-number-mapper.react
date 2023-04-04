import { StoredParameters } from "../AppContext";
import { ExerciseType } from "../components/exercise/ExerciseType";
import { SolutionStatus } from "../components/exercise/SolutionStatus";
import { KeyboardType } from "../components/keyboard/KeyboardType";
import { FeedbackTime } from "../components/settings/FeedbackTime";
import { ISolvingTime } from "../model/ISolvingTime";
import { IStopwatch } from "../services/IStopwatch";

export type IAppContext = {
  settings: {
    storedParameters: StoredParameters;
    setExerciseType: (exerciseType: ExerciseType) => void;
    setFeedbackTime: (feedbackTime: FeedbackTime) => void;
    setShowSolvingTimeList: (showSolvingTimeList: boolean) => void;
    keyboardType: KeyboardType;
    correctSolution?: Boolean;
    onResetProgress: () => void;
  };
  exercise: {
    symbol: string;
    provideExerciseSolution: (selectedSymbol: string) => void;
    solutionStatus: SolutionStatus;
    solvingTimes: ISolvingTime[];
  };
  stopwatch: IStopwatch;
};
