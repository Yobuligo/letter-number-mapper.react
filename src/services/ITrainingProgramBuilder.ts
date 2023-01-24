import { ProbabilityWeight } from "../Types/Types";
import { ITrainingProgram } from "./../model/ITrainingProgram";
import { ITrainingSection } from "./../model/ITrainingSection";
import { ITrainingSectionBuilder } from "./ITrainingSectionBuilder";

export interface ITrainingProgramBuilder {
  addTrainingSection(
    trainingSection: ITrainingSection
  ): ITrainingProgramBuilder;

  createTrainingSection(
    probabilityWeight: ProbabilityWeight,
    creator: (
      trainingSectionBuilder: ITrainingSectionBuilder
    ) => ITrainingSection
  ): ITrainingProgramBuilder;

  build(): ITrainingProgram;
}
