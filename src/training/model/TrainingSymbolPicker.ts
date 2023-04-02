import { error, repeat } from "@yobuligo/core.typescript";
import { ITrainingProgram } from "./ITrainingProgram";
import { ITrainingSymbol } from "./ITrainingSymbol";
import { ITrainingSymbolPicker } from "./ITrainingSymbolPicker";

export class TrainingSymbolPicker implements ITrainingSymbolPicker {
  constructor(private trainingProgram: ITrainingProgram) {}

  next(): ITrainingSymbol {
    return this.selectTrainingSymbol();
  }

  private selectTrainingSymbol(): ITrainingSymbol {
    const trainingSymbolList = this.buildTrainingSymbolList();
    const percent = Math.random() * trainingSymbolList.length;
    const index = Math.ceil(percent);
    return (
      trainingSymbolList.at(index - 1) ??
      error(`Error when picking training symbol. Training symbol is undefined`)
    );
  }

  private buildTrainingSymbolList(): ITrainingSymbol[] {
    let size = this.trainingProgram.trainingSections.length;
    const trainingSymbols: ITrainingSymbol[] = [];
    this.trainingProgram.trainingSections.forEach((trainingSection) => {
      trainingSection
        .findAllTrainingSymbols()
        .forEach((trainingSymbol) =>
          repeat(size, () => trainingSymbols.push(trainingSymbol))
        );
      size--;
    });
    return trainingSymbols;
  }
}
