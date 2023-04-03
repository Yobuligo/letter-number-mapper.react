import { ITrainingSection } from "./ITrainingSection";
import { ITrainingSymbol } from "./ITrainingSymbol";
import { ITrainingSymbolDO } from "./ITrainingSymbolDO";
import { TrainingSymbolDAO } from "./TrainingSymbolDAO";

export class TrainingSymbol implements ITrainingSymbol {
  private trainingSymbolDO: ITrainingSymbolDO;
  private _numberSuccessfulAnswers: number = 0;
  private trainingSectionInt?: ITrainingSection = undefined;

  constructor(public symbol: string) {
    this.trainingSymbolDO = TrainingSymbolDAO.add({
      symbol: symbol,
      numberSuccessfulAnswers: this._numberSuccessfulAnswers,
    });
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
      this.updateTrainingSymbolDO();
    }
    console.log(
      `Symbol '${this.symbol}' was not guessed correctly. You dropped back down to '${this.numberSuccessfulAnswers}'.`
    );
  }

  succeed(): void {
    this._numberSuccessfulAnswers++;
    this.updateTrainingSymbolDO();
    console.log(
      `Symbol '${this.symbol}' was guessed correctly '${this.numberSuccessfulAnswers}' times`
    );
  }

  private updateTrainingSymbolDO() {
    this.trainingSymbolDO.numberSuccessfulAnswers =
      this._numberSuccessfulAnswers;
    TrainingSymbolDAO.update(this.trainingSymbolDO);
  }
}
