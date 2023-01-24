import { ITrainingExercise } from "./ITrainingExercise";
import { ITrainingSymbol } from "./ITrainingSymbol";

export class TrainingExercise implements ITrainingExercise {
  constructor(public trainingSymbol: ITrainingSymbol) {}
  
  succeeded(): void {
    throw new Error("Method not implemented.");
  }
  failed(): void {
    throw new Error("Method not implemented.");
  }
}
