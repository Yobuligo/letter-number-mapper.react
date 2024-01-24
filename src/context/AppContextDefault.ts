import { ExerciseType } from "../components/exercise/ExerciseType";
import { SolutionStatus } from "../components/exercise/SolutionStatus";
import { KeyboardLayout } from "../components/keyboard/KeyboardLayout";
import { KeyboardType } from "../components/keyboard/KeyboardType";
import { FeedbackTime } from "../components/settings/FeedbackTime";
import { Stopwatch } from "../services/Stopwatch";
import { StoredParameters } from "./../AppContext";
import { IAppContext } from "./IAppContext";

export const AppContextDefault: IAppContext = {
  settings: {
    letterToNumber_language: { value: "", setValue: () => {} },
    storedParameters: {
      exerciseType: ExerciseType.LETTER_TO_NUMBER,
      feedbackTime: FeedbackTime.MIDDLE,
      keyboardLayout: KeyboardLayout.QWERTY,
      showSolvingTimeList: true,
    } as StoredParameters,
    setExerciseType: (exerciseType: ExerciseType) => {},
    setFeedbackTime: (feedbackTime: FeedbackTime) => {},
    setKeyboardLayout: (keyboardLayout: KeyboardLayout) => {},
    setShowSolvingTimeList: (showSolvingTimeList: boolean) => {},
    setShowSolvingTime: (showSolvingTime: boolean) => {},
    keyboardType: KeyboardType.NUMBER,
    correctSolution: undefined,
    onResetProgress: () => {},
  },
  exercise: {
    symbol: "A",
    provideExerciseSolution: () => {},
    solutionStatus: SolutionStatus.NotProvided,
    solvingTimes: [],
    resetSolvingTimes: () => {},
  },
  devMode: {
    devModeActive: false,
    setDevModeActive: () => {},
    findPickedSymbolCount: (symbol: string) => 0,
  },
  stopwatch: new Stopwatch(),
  lastPracticedSymbol: "A",
  setLastPracticedSymbol: () => {},
};
