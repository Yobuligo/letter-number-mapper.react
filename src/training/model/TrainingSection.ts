import { ITrainingSection } from "./ITrainingSection";
import { ITrainingSymbol } from "./ITrainingSymbol";

export class TrainingSection implements ITrainingSection {
  private trainingSymbols: ITrainingSymbol[] = [];
  id: number = 0;
  follower: ITrainingSection | undefined = undefined;
  predecessor: ITrainingSection | undefined = undefined;

  constructor(
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

  countTrainingSymbols(): number {
    return this.trainingSymbols.length;
  }

  hasTrainingSymbols(): boolean {
    return !this.hasNotTrainingSymbols();
  }

  hasNotTrainingSymbols(): boolean {
    return this.trainingSymbols.length === 0;
  }

  findAllTrainingSymbols(): ITrainingSymbol[] {
    return this.trainingSymbols;
  }

  trainingSymbolAt(index: number): ITrainingSymbol {
    const trainingSymbol = this.trainingSymbols[index];
    if (trainingSymbol === undefined) {
      throw new Error(
        `Error when reading training symbol by index. Index is out of bounds.`
      );
    }
    return trainingSymbol;
  }

  removeTrainingSymbol(trainingSymbol: ITrainingSymbol): void {
    this.trainingSymbols.splice(
      this.trainingSymbols.indexOf(trainingSymbol),
      1
    );
  }
}
