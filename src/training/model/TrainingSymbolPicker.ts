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
    return this.trainingProgram.trainingProgramInfo.findTrainingSectionByProbability(
      probability
    );
  }

  private selectTrainingSymbol(): ITrainingSymbol {
    const trainingSection = this.selectTrainingSection();
    const probability = Math.random() * trainingSection.countTrainingSymbols();
    const index =
      Math.round((trainingSection.countTrainingSymbols() / 100) * probability) -
      1;
    return trainingSection.trainingSymbolAt(index);
  }
}
