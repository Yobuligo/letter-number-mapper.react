import { ExerciseType } from "../components/exercise/ExerciseType";
import { FeedbackTime } from "../components/settings/FeedbackTime";
import { IStoredParameter } from "./IStoredParameter";

/**
 * An implementation of this interface provides all stored parameters of this application.
 * Each stored parameter must be of @type {IStoredParameter}.
 *
 * It has to be extended in case a new parameter should be added.
 */
export interface IStoredParameters {
  exerciseType: IStoredParameter<ExerciseType>;
  feedbackTime: IStoredParameter<FeedbackTime>;
  showSolvingTimeList: IStoredParameter<boolean>;
}
