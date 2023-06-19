import { StoredParameters } from "../AppContext";
import { IValue } from "../Types/IValue";
import { ExerciseType } from "../components/exercise/ExerciseType";
import { SolutionStatus } from "../components/exercise/SolutionStatus";
import { KeyboardType } from "../components/keyboard/KeyboardType";
import { FeedbackTime } from "../components/settings/FeedbackTime";
import { ISolvingTime } from "../model/ISolvingTime";
import { IStopwatch } from "../services/IStopwatch";

export type IAppContext = {
  settings: {
    language: IValue<string>;
    storedParameters: StoredParameters;
    setExerciseType: (exerciseType: ExerciseType) => void;
    setFeedbackTime: (feedbackTime: FeedbackTime) => void;
    setShowSolvingTimeList: (showSolvingTimeList: boolean) => void;
    setShowSolvingTime: (showSolvingTime: boolean) => void;
    keyboardType: KeyboardType;
    correctSolution?: Boolean;
    onResetProgress: () => void;
  };
  exercise: {
    symbol: string;
    provideExerciseSolution: (selectedSymbol: string) => void;
    solutionStatus: SolutionStatus;
    solvingTimes: ISolvingTime[];
    resetSolvingTimes: () => void;
  };
  devMode: {
    devModeActive: Boolean;
    setDevModeActive: (active: boolean) => void;
    findPickedSymbolCount: (symbol: string) => number;
  };
  stopwatch: IStopwatch;
  lastPracticedSymbol: string | undefined;
  setLastPracticedSymbol: (symbol: string) => void;
};
