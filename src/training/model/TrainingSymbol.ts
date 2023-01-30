import { ITrainingSymbol } from "./ITrainingSymbol";

type EventHandler = (trainingSymbol: ITrainingSymbol) => void;

export class TrainingSymbol implements ITrainingSymbol {
  private eventHandlerOnFailed: EventHandler[] = [];
  private eventHandlerOnSuccess: EventHandler[] = [];
  private numberSuccessfulAnswersInt: number = 0;

  constructor(public symbol: string) {}

  public get numberSuccessfulAnswers(): number {
    return this.numberSuccessfulAnswersInt;
  }

  failed(): void {
    this.numberSuccessfulAnswersInt = 0;
    this.raiseOnFailed();
  }

  succeed(): void {
    this.numberSuccessfulAnswersInt++;
    this.raiseOnSuccess();
  }

  registerOnFailed(
    eventHandler: (trainingSymbol: ITrainingSymbol) => void
  ): void {
    this.eventHandlerOnFailed.push(eventHandler);
  }

  registerOnSucceed(
    eventHandler: (trainingSymbol: ITrainingSymbol) => void
  ): void {
    this.eventHandlerOnSuccess.push(eventHandler);
  }

  private raiseOnFailed() {
    this.eventHandlerOnFailed.forEach((eventHandler) => {
      eventHandler(this);
    });
  }

  private raiseOnSuccess() {
    this.eventHandlerOnSuccess.forEach((eventHandler) => {
      eventHandler(this);
    });
  }
}
