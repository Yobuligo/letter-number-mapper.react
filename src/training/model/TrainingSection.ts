import { ProbabilityWeight } from "../../Types/Types";
import { ITrainingSection } from "./ITrainingSection";
import { ITrainingSymbol } from "./ITrainingSymbol";

export class TrainingSection implements ITrainingSection {
  private trainingSymbols: ITrainingSymbol[] = [];
  follower: ITrainingSection | undefined = undefined;
  predecessor: ITrainingSection | undefined = undefined;

  constructor(
    readonly probabilityWeight: ProbabilityWeight,
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
    return this.trainingSymbols.length === 0;
  }

  hasNotTrainingSymbols(): boolean {
    return !this.hasTrainingSymbols();
  }

  findAllTrainingSymbols(): ITrainingSymbol[] {
    return this.trainingSymbols;
  }

  trainingSymbolAt(index: number): ITrainingSymbol {
    return this.trainingSymbols[index];
  }

  removeTrainingSymbol(trainingSymbol: ITrainingSymbol): void {
    this.trainingSymbols.splice(
      this.trainingSymbols.indexOf(trainingSymbol),
      1
    );
  }
}
