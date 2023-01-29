import { ITrainingProgram } from "./ITrainingProgram";
import { ITrainingSection } from "./ITrainingSection";
import { ITrainingSymbol } from "./ITrainingSymbol";
import { ITrainingSymbolPicker } from "./ITrainingSymbolPicker";

export class TrainingSymbolPicker implements ITrainingSymbolPicker {
  constructor(private trainingProgram: ITrainingProgram) {}

  next(): ITrainingSymbol {
    return this.selectTrainingSymbol();
  }

  private selectTrainingSection(): ITrainingSection {
    const probability =
      Math.random() *
      this.trainingProgram.trainingProgramInfo.probabilityWeightSum;

    // Which sections belongs to the calculated probability?
    // 50, 30, 15, 5
    // 67%

    // find section from probability
    // 1..50    1
    // 51..80   2
    // 81..95   3
    // 96..100  4

    throw new Error();
  }

  private selectTrainingSymbol(): ITrainingSymbol {
    const trainingSection = this.selectTrainingSection();
    throw new Error();
  }
}
