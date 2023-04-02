import { TODO } from "@yobuligo/core.typescript";
import { ITrainingProgram } from "./ITrainingProgram";
import { ITrainingSection } from "./ITrainingSection";
import { ITrainingSymbol } from "./ITrainingSymbol";
import { ITrainingSymbolPicker } from "./ITrainingSymbolPicker";

export class TrainingSymbolPicker implements ITrainingSymbolPicker {
  constructor(private trainingProgram: ITrainingProgram) {}

  next(): ITrainingSymbol {
    return this.selectTrainingSymbol();
  }

  private selectTrainingSymbol(): ITrainingSymbol {
    TODO()
    // const trainingSection = this.selectTrainingSection();
    // const percent = Math.random() * trainingSection.countTrainingSymbols();
    // const index = Math.ceil(percent);
    // const trainingSymbol = trainingSection.trainingSymbolAt(index - 1);
    // if (trainingSymbol === undefined) {
    //   throw new Error(
    //     `Error when picking training symbol. Training symbol is undefined`
    //   );
    // }
    // return trainingSymbol;
  }

}
