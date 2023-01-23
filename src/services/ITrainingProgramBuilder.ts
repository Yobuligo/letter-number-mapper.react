import { ITrainingProgram } from "./../model/ITrainingProgram";
import { ITrainingSection } from "./../model/ITrainingSection";

export interface ITrainingProgramBuilder {
  addTrainingSection(
    trainingSection: ITrainingSection
  ): ITrainingProgramBuilder;
  build(): ITrainingProgram;
}
