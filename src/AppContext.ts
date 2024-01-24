import { createContext } from "react";
import { ExerciseType } from "./components/exercise/ExerciseType";
import { FeedbackTime } from "./components/settings/FeedbackTime";
import { AppContextDefault } from "./context/AppContextDefault";
import { IAppContext } from "./context/IAppContext";
import { KeyboardLayout } from "./components/keyboard/KeyboardLayout";

export const STORED_PARAMETERS = "StoredParameters";
export type StoredParameters = {
  exerciseType: ExerciseType;
  feedbackTime: FeedbackTime;
  keyboardLayout: KeyboardLayout;
  showSolvingTimeList: boolean;
  showSolvingTime: boolean;
};

export const AppContext = createContext<IAppContext>(AppContextDefault);
