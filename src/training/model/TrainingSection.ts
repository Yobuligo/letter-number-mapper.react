import { ITrainingSection } from "./ITrainingSection";
import { ITrainingSymbol } from "./ITrainingSymbol";

export class TrainingSection implements ITrainingSection {
  private trainingSymbols = new Map<ITrainingSymbol, ITrainingSymbol>();
  id: number = 0;
  follower: ITrainingSection | undefined = undefined;
  predecessor: ITrainingSection | undefined = undefined;

  constructor(
    readonly answersTillProgression: number,
    trainingSymbols?: ITrainingSymbol[]
  ) {
    if (trainingSymbols !== undefined) {
      trainingSymbols.forEach((trainingSymbol) =>
        this.trainingSymbols.set(trainingSymbol, trainingSymbol)
      );
    }
  }

  addTrainingSymbol(trainingSymbol: ITrainingSymbol): void {
    this.trainingSymbols.set(trainingSymbol, trainingSymbol);
  }

  countTrainingSymbols(): number {
    return this.trainingSymbols.size;
  }

  hasTrainingSymbols(): boolean {
    return !this.hasNotTrainingSymbols();
  }

  hasNotTrainingSymbols(): boolean {
    return this.trainingSymbols.size === 0;
  }

  findAllTrainingSymbols(excludeSymbols?: string[]): ITrainingSymbol[] {
    const resultTrainingSymbols: ITrainingSymbol[] = [];
    this.trainingSymbols.forEach((trainingSymbol) => {
      if (!excludeSymbols?.includes(trainingSymbol.symbol)) {
        resultTrainingSymbols.push(trainingSymbol);
      }
    });
    return resultTrainingSymbols;
  }

  removeTrainingSymbol(trainingSymbol: ITrainingSymbol): void {
    this.trainingSymbols.delete(trainingSymbol);
  }
}
