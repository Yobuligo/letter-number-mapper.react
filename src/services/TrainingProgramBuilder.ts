import { ITrainingProgram } from "../model/ITrainingProgram";
import { ITrainingSection } from "./../model/ITrainingSection";
import { ITrainingProgramBuilder } from "./ITrainingProgramBuilder";
import { ITrainingSectionBuilder } from "./ITrainingSectionBuilder";
import { TrainingSectionBuilder } from "./TrainingSectionBuilder";

export class TrainingProgramBuilder implements ITrainingProgramBuilder {
  private trainingSections: ITrainingSection[] = [];

  addTrainingSection(
    trainingSection: ITrainingSection
  ): ITrainingProgramBuilder {
    this.trainingSections.push(trainingSection);
    return this;
  }

  createTrainingSection(
    probability: number,
    creator: (
      trainingSectionBuilder: ITrainingSectionBuilder
    ) => ITrainingSection
  ): ITrainingProgramBuilder {
    const trainingSectionBuilder = new TrainingSectionBuilder(probability);
    const trainingSection = creator(trainingSectionBuilder);
    this.addTrainingSection(trainingSection);
    return this;
  }

  build(): ITrainingProgram {
    return { trainingSections: this.trainingSections };
  }
}
