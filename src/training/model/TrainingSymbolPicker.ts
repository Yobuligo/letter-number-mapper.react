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
    const percent = Math.random() * trainingSection.countTrainingSymbols();
    const index = Math.ceil(percent);
    const trainingSymbol = trainingSection.trainingSymbolAt(index - 1);
    if (trainingSymbol === undefined) {
      throw new Error(
        `Error when picking training symbol. Training symbol is undefined`
      );
    }
    return trainingSymbol;
  }

  private selectTrainingSection(): ITrainingSection {
    return this.trainingSectionPicker.next();
  }
}
