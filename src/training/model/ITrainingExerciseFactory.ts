import { ITrainingExercise } from "./ITrainingExercise";
import { ITrainingSymbol } from "./ITrainingSymbol";

/**
 * An implementation of this interface is responsible for creating instances of type ITrainingExercise
 */
export interface ITrainingExerciseFactory {
  create(trainingSymbol: ITrainingSymbol): ITrainingExercise;
}
