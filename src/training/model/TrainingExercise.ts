import { ITrainingExercise } from "./ITrainingExercise";
import { ITrainingSymbol } from "./ITrainingSymbol";
import { TrainingExerciseState } from "./TrainingExerciseState";

export class TrainingExercise implements ITrainingExercise {
  private eventHandlers: ((newState: TrainingExerciseState) => void)[] = [];

  constructor(public trainingSymbol: ITrainingSymbol) {}

  succeeded(): void {
    this.raiseStateChanged(TrainingExerciseState.SUCCEEDED);
    throw new Error("Method not implemented.");
  }

  failed(): void {
    this.raiseStateChanged(TrainingExerciseState.FAILED);
    throw new Error("Method not implemented.");
  }

  registerOnStateChanged(
    eventHandler: (newState: TrainingExerciseState) => void
  ): void {
    this.eventHandlers.push(eventHandler);
  }

  private raiseStateChanged(newState: TrainingExerciseState) {
    this.eventHandlers.forEach((eventHandler) => {
      eventHandler(newState);
    });
  }
}
