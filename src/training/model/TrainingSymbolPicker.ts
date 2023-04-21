import { error, repeat } from "@yobuligo/core.typescript";
import { ITrainingProgram } from "./ITrainingProgram";
import { ITrainingSymbol } from "./ITrainingSymbol";
import { ITrainingSymbolPicker } from "./ITrainingSymbolPicker";

export class TrainingSymbolPicker implements ITrainingSymbolPicker {
  constructor(private trainingProgram: ITrainingProgram) {}

  next(excludeSymbols?: string[]): ITrainingSymbol {
    return this.selectTrainingSymbol(excludeSymbols);
  }

  private selectTrainingSymbol(excludeSymbols?: string[]): ITrainingSymbol {
    const trainingSymbolList = this.buildTrainingSymbolList(excludeSymbols);
    const percent = Math.random() * trainingSymbolList.length;
    const next = Math.ceil(percent);
    return (
      trainingSymbolList.at(next - 1) ??
      error(`Error when picking training symbol. Training symbol is undefined`)
    );
  }

  private buildTrainingSymbolList(
    excludeSymbols?: string[]
  ): ITrainingSymbol[] {
    let size = this.trainingProgram.trainingSections.length;
    const trainingSymbols: ITrainingSymbol[] = [];
    this.trainingProgram.trainingSections.forEach((trainingSection) => {
      const times = this.calcBinaryNumber(size);
      trainingSection
        .findAllTrainingSymbols(excludeSymbols)
        .forEach((trainingSymbol) =>
          repeat(times, () => trainingSymbols.push(trainingSymbol))
        );
      size--;
    });
    return trainingSymbols;
  }

  private calcBinaryNumber(size: number): number {
    let cursor: number = 1;
    let result: number = 1;
    while (cursor < size) {
      result = result * 2;
      cursor++;
    }
    return result;
  }
}
