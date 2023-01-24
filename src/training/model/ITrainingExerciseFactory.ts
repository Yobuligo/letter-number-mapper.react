import { ITrainingExercise } from "./ITrainingExercise";
import { ITrainingSymbol } from "./ITrainingSymbol";

export interface ITrainingExerciseFactory {
  create(trainingSymbol: ITrainingSymbol): ITrainingExercise;
}
