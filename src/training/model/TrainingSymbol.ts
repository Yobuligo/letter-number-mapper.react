import { ITrainingSection } from "./ITrainingSection";
import { ITrainingSymbol } from "./ITrainingSymbol";

export class TrainingSymbol implements ITrainingSymbol {
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
    console.log(
      `Symbol '${this.symbol}' was not guessed correctly. You dropped back down to '${this.numberSuccessfulAnswers}'.`
    );
  }

  succeed(): void {
    this.numberSuccessfulAnswersInt++;
    console.log(
      `Symbol '${this.symbol}' was guessed correctly '${this.numberSuccessfulAnswers}' times`
    );
  }
}
