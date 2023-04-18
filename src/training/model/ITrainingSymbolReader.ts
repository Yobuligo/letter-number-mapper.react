import { ITrainingExercise } from "./ITrainingExercise";

export interface ITrainingSymbolReader {
  get(trainingExercise: ITrainingExercise): string;
}
