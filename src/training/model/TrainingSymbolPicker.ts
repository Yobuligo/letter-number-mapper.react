import { error, repeat } from "@yobuligo/core.typescript";
import { ITrainingProgram } from "./ITrainingProgram";
import { ITrainingSymbol } from "./ITrainingSymbol";
import { ITrainingSymbolPicker } from "./ITrainingSymbolPicker";

export class TrainingSymbolPicker implements ITrainingSymbolPicker {
  private currentIndex = 0;

  constructor(private trainingProgram: ITrainingProgram) {}

  next(): ITrainingSymbol {
    return this.selectTrainingSymbol();
  }

  private selectTrainingSymbol(): ITrainingSymbol {
    const trainingSymbolList = this.buildTrainingSymbolList();
    if (trainingSymbolList.length < 2) {
      throw new Error(
        "Error when selecting next training symbol. TrainingSymbolList contains only 1 entry, which would lead in the following code to an endless loop. Function not supported for that constellation."
      );
    }
    while (true) {
      const percent = Math.random() * trainingSymbolList.length;
      const next = Math.ceil(percent);
      if (next !== this.currentIndex) {
        this.currentIndex = next;
        break;
      }
    }

    return (
      trainingSymbolList.at(this.currentIndex - 1) ??
      error(`Error when picking training symbol. Training symbol is undefined`)
    );
  }

  private buildTrainingSymbolList(): ITrainingSymbol[] {
    let size = this.trainingProgram.trainingSections.length;
    const trainingSymbols: ITrainingSymbol[] = [];
    this.trainingProgram.trainingSections.forEach((trainingSection) => {
      const times = this.calcBinaryNumber(size)
      trainingSection
        .findAllTrainingSymbols()
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
