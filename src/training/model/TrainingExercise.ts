import { ITrainingExercise } from "./ITrainingExercise";
import { ITrainingSymbol } from "./ITrainingSymbol";

export class TrainingExercise implements ITrainingExercise {
  constructor(public trainingSymbol: ITrainingSymbol) {}

  succeeded(): void {
    this.trainingSymbol.succeed();
  }

  failed(): void {
    this.trainingSymbol.failed();
  }
}
