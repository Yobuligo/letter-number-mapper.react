import { ITrainingExercise } from "./ITrainingExercise";
import { ITrainingProgramInfo } from "./ITrainingProgramInfo";
import { ITrainingSection } from "./ITrainingSection";

/**
 * An implementation of this interface represents a ITrainingProgram which contains of ITrainingSections which contains ITrainingSymbols.
 * The ITrainingProgram is a mediator for all services and the frontend.
 */
export interface ITrainingProgram {
  readonly trainingSections: ITrainingSection[];
  readonly trainingProgramInfo: ITrainingProgramInfo;
  nextTrainingExercise(): ITrainingExercise;
}
