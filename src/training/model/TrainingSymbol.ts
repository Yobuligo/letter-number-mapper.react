import { ITrainingSection } from "./ITrainingSection";
import { ITrainingSymbol } from "./ITrainingSymbol";

type EventHandler = (trainingSymbol: ITrainingSymbol) => void;

export class TrainingSymbol implements ITrainingSymbol {
  private onFailHandlers: EventHandler[] = [];
  private onSucceedHandlers: EventHandler[] = [];
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
    console.log(
      `Symbol '${this.symbol}' was not guessed correctly. You dropped back down to '${this.numberSuccessfulAnswers}'.`
    );
  }

  succeed(): void {
    this.numberSuccessfulAnswersInt++;
    this.raiseOnSucceed();
    console.log(
      `Symbol '${this.symbol}' was guessed correctly '${this.numberSuccessfulAnswers}' times`
    );
  }

  onFail(
    onFailHandler: (trainingSymbol: ITrainingSymbol) => void
  ): void {
    this.onFailHandlers.push(onFailHandler);
  }

  onSucceed(
    onSucceedHandler: (trainingSymbol: ITrainingSymbol) => void
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
