import { ITrainingExercise } from "./ITrainingExercise";
import { ITrainingSection } from "./ITrainingSection";

/**
 * An implementation of this interface represents a ITrainingProgram which contains of ITrainingSections which contains ITrainingSymbols
 */
export interface ITrainingProgram {
  readonly trainingSections: ITrainingSection[];
  nextTrainingExercise(): ITrainingExercise;
}
