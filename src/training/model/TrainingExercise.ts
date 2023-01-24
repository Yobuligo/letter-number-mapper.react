import { ITrainingExercise } from "./ITrainingExercise";
import { ITrainingSymbol } from "./ITrainingSymbol";
import { TrainingExerciseState } from "./TrainingExerciseState";

export class TrainingExercise implements ITrainingExercise {
  private eventHandlers: ((
    trainingSymbol: ITrainingSymbol,
    newState: TrainingExerciseState
  ) => void)[] = [];

  constructor(public trainingSymbol: ITrainingSymbol) {}

  succeeded(): void {
    this.raiseStateChanged(TrainingExerciseState.SUCCEEDED);
  }

  failed(): void {
    this.raiseStateChanged(TrainingExerciseState.FAILED);
  }

  registerOnStateChanged(
    eventHandler: (
      trainingSymbol: ITrainingSymbol,
      newState: TrainingExerciseState
    ) => void
  ): void {
    this.eventHandlers.push(eventHandler);
  }

  private raiseStateChanged(newState: TrainingExerciseState) {
    this.eventHandlers.forEach((eventHandler) => {
      eventHandler(this.trainingSymbol, newState);
    });
  }
}
