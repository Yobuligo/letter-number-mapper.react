import { ITrainingProgram } from "./ITrainingProgram";
import { ITrainingSymbol } from "./ITrainingSymbol";
import { ITrainingSymbolPicker } from "./ITrainingSymbolPicker";

export class TrainingSymbolPicker implements ITrainingSymbolPicker {
  constructor(private trainingProgram: ITrainingProgram) {}

  next(): ITrainingSymbol {
    throw new Error("Method not implemented.");
  }
}
