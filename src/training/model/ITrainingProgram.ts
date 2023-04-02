import { ITrainingExercise } from "./ITrainingExercise";
import { ITrainingSection } from "./ITrainingSection";

/**
 * An implementation of this interface represents a ITrainingProgram which contains of ITrainingSections which contains ITrainingSymbols.
 * The ITrainingProgram is a mediator for all services and the frontend.
 */
export interface ITrainingProgram {
  readonly trainingSections: ITrainingSection[];
  nextTrainingExercise(): ITrainingExercise;
}
