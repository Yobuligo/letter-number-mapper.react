import { ITrainingProgram } from "./ITrainingProgram";
import { ITrainingSymbol } from "./ITrainingSymbol";
import { ITrainingSymbolShifter } from "./ITrainingSymbolShifter";

export class TrainingSymbolShifter implements ITrainingSymbolShifter {
  constructor(private trainingProgram: ITrainingProgram) {}

  shiftUp(trainingSymbol: ITrainingSymbol): void {
    throw new Error("Method not implemented.");
  }
  shiftDown(trainingSymbol: ITrainingSymbol): void {
    throw new Error("Method not implemented.");
  }
}
