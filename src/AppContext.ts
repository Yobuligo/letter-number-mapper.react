import { createContext } from "react";
import { ExerciseType } from "./components/exercise/ExerciseType";
import { FeedbackTime } from "./components/settings/FeedbackTime";
import { AppContextDefault } from "./context/AppContextDefault";
import { IAppContext } from "./context/IAppContext";

export const STORED_PARAMETERS = "StoredParameters";
export type StoredParameters = {
  exerciseType: ExerciseType;
  feedbackTime: FeedbackTime;
  showSolvingTimeList: boolean;
};

export const AppContext = createContext<IAppContext>(AppContextDefault);
