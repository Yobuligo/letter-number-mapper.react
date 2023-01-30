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
        trainingSectionBuilder.setAnswersTillProgression(3);
        this.symbols.forEach((symbol) => {
          trainingSectionBuilder.addTrainingSymbol(new TrainingSymbol(symbol));
        });
        return trainingSectionBuilder.build();
      })
      .createTrainingSection(30, (trainingSectionBuilder) => {
        trainingSectionBuilder.setAnswersTillProgression(6);
        return trainingSectionBuilder.build();
      })
      .createTrainingSection(15, (trainingSectionBuilder) => {
        trainingSectionBuilder.setAnswersTillProgression(9);
        return trainingSectionBuilder.build();
      })
      .createTrainingSection(5, (trainingSectionBuilder) => {
        trainingSectionBuilder.setAnswersTillProgression(12);
        return trainingSectionBuilder.build();
      })
      .build();
  }
}
