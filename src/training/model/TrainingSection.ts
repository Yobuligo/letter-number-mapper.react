import { ProbabilityWeight } from "../../Types/Types";
import { ITrainingSection } from "./ITrainingSection";
import { ITrainingSymbol } from "./ITrainingSymbol";

export class TrainingSection implements ITrainingSection {
  private trainingSymbols: ITrainingSymbol[] = [];
  predecessor: ITrainingSection | undefined = undefined;
  follower: ITrainingSection | undefined = undefined;

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
