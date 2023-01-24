import { ITrainingSection } from "./ITrainingSection";
import { ITrainingSymbol } from "./ITrainingSymbol";

export class TrainingSection implements ITrainingSection {
  private trainingSymbols: ITrainingSymbol[] = [];

  constructor(
    readonly probabilityWeight: number,
    readonly answersTillProgression: number,
    trainingSymbols?: ITrainingSymbol[]
  ) {
    if (trainingSymbols !== undefined) {
      this.trainingSymbols.push(...trainingSymbols);
    }
  }

  addTrainingSymbol(trainingSymbol: ITrainingSymbol): void {
    this.trainingSymbols.push(trainingSymbol);
  }

  removeTrainingSymbol(trainingSymbol: ITrainingSymbol): void {
    this.trainingSymbols.splice(
      this.trainingSymbols.indexOf(trainingSymbol),
      1
    );
  }

  findAll(): ITrainingSymbol[] {
    return this.trainingSymbols;
  }
}
