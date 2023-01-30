import { ITrainingSection } from "./ITrainingSection";
import { ITrainingSymbol } from "./ITrainingSymbol";

type EventHandler = (trainingSymbol: ITrainingSymbol) => void;

export class TrainingSymbol implements ITrainingSymbol {
  private eventHandlerOnFailed: EventHandler[] = [];
  private eventHandlerOnSuccess: EventHandler[] = [];
  private numberSuccessfulAnswersInt: number = 0;
  private trainingSectionInt?: ITrainingSection = undefined;

  constructor(public symbol: string) {}

  public get numberSuccessfulAnswers(): number {
    return this.numberSuccessfulAnswersInt;
  }

  public get trainingSection(): ITrainingSection {
    return this.trainingSectionInt!;
  }

  public set trainingSection(value: ITrainingSection) {
    // detach from current training Section
    this.trainingSectionInt?.removeTrainingSymbol(this);

    // attach to new training section
    value.addTrainingSymbol(this);
    this.trainingSectionInt = value;
  }

  failed(): void {
    this.numberSuccessfulAnswersInt = 0;
    this.raiseOnFailed();
  }

  succeed(): void {
    this.numberSuccessfulAnswersInt++;
    this.raiseOnSucceed();
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

  private raiseOnSucceed() {
    this.eventHandlerOnSuccess.forEach((eventHandler) => {
      eventHandler(this);
    });
  }
}
