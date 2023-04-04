import { ITrainingSection } from "./ITrainingSection";
import { ITrainingSymbol } from "./ITrainingSymbol";

export class TrainingSymbol implements ITrainingSymbol {
  private _numberSuccessfulAnswers: number = 0;
  private trainingSectionInt?: ITrainingSection = undefined;

  constructor(public symbol: string, numberSuccessfulAnswers?: number) {
    if (numberSuccessfulAnswers) {
      this._numberSuccessfulAnswers = numberSuccessfulAnswers;
    }
  }

  public get numberSuccessfulAnswers(): number {
    return this._numberSuccessfulAnswers;
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
    if (this._numberSuccessfulAnswers > 0) {
      this._numberSuccessfulAnswers--;
    }
    console.log(
      `Symbol '${this.symbol}' was not guessed correctly. You dropped back down to '${this.numberSuccessfulAnswers}'.`
    );
  }

  succeed(): void {
    this._numberSuccessfulAnswers++;
    console.log(
      `Symbol '${this.symbol}' was guessed correctly '${this.numberSuccessfulAnswers}' times`
    );
  }
}
