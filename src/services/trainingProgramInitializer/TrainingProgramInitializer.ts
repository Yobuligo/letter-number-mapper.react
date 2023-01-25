import { ITrainingProgramBuilder } from "../../training/builder/ITrainingProgramBuilder";
import { TrainingProgramBuilder } from "../../training/builder/TrainingProgramBuilder";
import { ITrainingProgram } from "../../training/model/ITrainingProgram";
import { ITrainingProgramInitializer } from "../../training/builder/ITrainingProgramInitializer";

export class TrainingProgramInitializer implements ITrainingProgramInitializer {
  constructor(private symbols: string[]) {}

  initialize(): ITrainingProgram {
    const trainingProgramBuilder: ITrainingProgramBuilder =
      new TrainingProgramBuilder();

    return trainingProgramBuilder
      .createTrainingSection(50, (trainingSectionBuilder) => {
        this.symbols.forEach((symbol) => {
          trainingSectionBuilder.addTrainingSymbol({
            symbol: symbol,
            numberSuccessfulAnswers: 0,
          });
        });
        return trainingSectionBuilder.build();
      })
      .createEmptyTrainingSection(30)
      .createEmptyTrainingSection(15)
      .createEmptyTrainingSection(5)
      .build();
  }
}
