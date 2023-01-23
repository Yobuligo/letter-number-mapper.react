import { ITrainingProgram } from "../model/ITrainingProgram";
import { ITrainingSection } from "./../model/ITrainingSection";
import { ITrainingProgramBuilder } from "./ITrainingProgramBuilder";

export class TrainingProgramBuilder implements ITrainingProgramBuilder {
  private trainingSections: ITrainingSection[] = [];

  addTrainingSection(
    trainingSection: ITrainingSection
  ): ITrainingProgramBuilder {
    this.trainingSections.push(trainingSection);
    return this;
  }

  build(): ITrainingProgram {
    return { trainingSections: this.trainingSections };
  }
}
