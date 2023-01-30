import { ITrainingExercise } from "./ITrainingExercise";
import { ITrainingSymbol } from "./ITrainingSymbol";

type EventHandler = (trainingExercise: ITrainingExercise) => void;

export class TrainingExercise implements ITrainingExercise {
  private eventHandlerOnFailed: EventHandler[] = [];
  private eventHandlerOnSucceed: EventHandler[] = [];

  constructor(public trainingSymbol: ITrainingSymbol) {}

  failed(): void {
    this.raiseOnFailed();
  }

  succeeded(): void {
    this.raiseOnSucceed();
  }

  registerOnFailed(
    eventHandler: (trainingExercise: ITrainingExercise) => void
  ): void {
    this.eventHandlerOnFailed.push(eventHandler);
  }

  registerOnSucceed(
    eventHandler: (trainingExercise: ITrainingExercise) => void
  ): void {
    this.eventHandlerOnSucceed.push(eventHandler);
  }

  private raiseOnFailed() {
    this.eventHandlerOnFailed.forEach((eventHandler) => {
      eventHandler(this);
    });
  }

  private raiseOnSucceed() {
    this.eventHandlerOnSucceed.forEach((eventHandler) => {
      eventHandler(this);
    });
  }
}
