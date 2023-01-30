import { ITrainingProgram } from "./ITrainingProgram";
import { ITrainingSection } from "./ITrainingSection";
import { ITrainingSectionPicker } from "./ITrainingSectionPicker";
import { ITrainingSymbol } from "./ITrainingSymbol";
import { ITrainingSymbolPicker } from "./ITrainingSymbolPicker";
import { TrainingSectionPicker } from "./TrainingSectionPicker";

export class TrainingSymbolPicker implements ITrainingSymbolPicker {
  private trainingSectionPicker: ITrainingSectionPicker =
    new TrainingSectionPicker(this.trainingProgram);

  constructor(private trainingProgram: ITrainingProgram) {}

  next(): ITrainingSymbol {
    return this.selectTrainingSymbol();
  }

  private selectTrainingSymbol(): ITrainingSymbol {
    const trainingSection = this.selectTrainingSection();
    const probability = Math.random() * trainingSection.countTrainingSymbols();
    const index =
      Math.round((trainingSection.countTrainingSymbols() / 100) * probability) -
      1;
    return trainingSection.trainingSymbolAt(index);
  }

  private selectTrainingSection(): ITrainingSection {
    return this.trainingSectionPicker.next();
  }  
}
