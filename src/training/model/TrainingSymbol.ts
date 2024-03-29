import { ITrainingSection } from "./ITrainingSection";
import { ITrainingSymbol } from "./ITrainingSymbol";

export class TrainingSymbol implements ITrainingSymbol {
  private _id: string = "";
  private _numberSuccessfulAnswers: number = 0;
  private trainingSectionInt?: ITrainingSection = undefined;
  private onChangeHandlers: (() => void)[] = [];

  constructor(
    public symbol: string,
    id?: string,
    numberSuccessfulAnswers?: number
  ) {
    if (numberSuccessfulAnswers) {
      this._numberSuccessfulAnswers = numberSuccessfulAnswers;
    }

    if (id) {
      this._id = id;
    }
  }

  public get id(): string {
    return this._id;
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
    this.publishOnChange();
  }

  succeed(): void {
    this._numberSuccessfulAnswers++;
    this.publishOnChange();
  }

  onChange(onChangeHandler: () => void): void {
    this.onChangeHandlers.push(onChangeHandler);
  }

  private publishOnChange() {
    this.onChangeHandlers.forEach((onChangeHandler) => onChangeHandler());
  }
}
