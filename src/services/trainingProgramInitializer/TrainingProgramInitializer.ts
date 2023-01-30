import { ITrainingProgramBuilder } from "../../training/builder/ITrainingProgramBuilder";
import { ITrainingProgramInitializer } from "../../training/builder/ITrainingProgramInitializer";
import { TrainingProgramBuilder } from "../../training/builder/TrainingProgramBuilder";
import { ITrainingProgram } from "../../training/model/ITrainingProgram";
import { TrainingSymbol } from "./../../training/model/TrainingSymbol";

export class TrainingProgramInitializer implements ITrainingProgramInitializer {
  constructor(private symbols: string[]) {}

  initialize(): ITrainingProgram {
    const trainingProgramBuilder: ITrainingProgramBuilder =
      new TrainingProgramBuilder();

    return trainingProgramBuilder
      .createTrainingSection(50, (trainingSectionBuilder) => {
        this.symbols.forEach((symbol) => {
          trainingSectionBuilder.addTrainingSymbol(new TrainingSymbol(symbol));
        });
        return trainingSectionBuilder.build();
      })
      .createEmptyTrainingSection(30)
      .createEmptyTrainingSection(15)
      .createEmptyTrainingSection(5)
      .build();
  }
}
