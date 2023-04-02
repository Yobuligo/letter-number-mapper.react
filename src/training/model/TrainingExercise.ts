import { ITrainingExercise } from "./ITrainingExercise";
import { ITrainingSymbol } from "./ITrainingSymbol";

type EventHandler = (trainingExercise: ITrainingExercise) => void;

export class TrainingExercise implements ITrainingExercise {
  private onFailHandlers: EventHandler[] = [];
  private onSucceedHandlers: EventHandler[] = [];

  constructor(public trainingSymbol: ITrainingSymbol) {
    if (trainingSymbol === undefined) {
      throw new Error(
        `Error when creating training exercise. The training symbol is undefined.`
      );
    }
  }

  failed(): void {
    this.trainingSymbol.failed();
    this.raiseOnFailed();
  }

  succeeded(): void {
    this.trainingSymbol.succeed();
    this.raiseOnSucceed();
  }

  onFail(
    onFailHandler: (trainingExercise: ITrainingExercise) => void
  ): void {
    this.onFailHandlers.push(onFailHandler);
  }

  onSucceed(
    onSucceedHandler: (trainingExercise: ITrainingExercise) => void
  ): void {
    this.onSucceedHandlers.push(onSucceedHandler);
  }

  private raiseOnFailed() {
    this.onFailHandlers.forEach((onFailHandler) => {
      onFailHandler(this);
    });
  }

  private raiseOnSucceed() {
    this.onSucceedHandlers.forEach((onSucceedHandler) => {
      onSucceedHandler(this);
    });
  }
}
