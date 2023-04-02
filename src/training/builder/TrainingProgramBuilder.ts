import { ITrainingProgram } from "../model/ITrainingProgram";
import { ITrainingSection } from "../model/ITrainingSection";
import { TrainingProgram } from "./../model/TrainingProgram";
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

  createEmptyTrainingSection(): ITrainingProgramBuilder {
    const trainingSection = this.createTrainingSectionBuilder().build();
    this.addTrainingSection(trainingSection);
    return this;
  }

  createTrainingSection(
    creator: (
      trainingSectionBuilder: ITrainingSectionBuilder
    ) => ITrainingSection
  ): ITrainingProgramBuilder {
    const trainingSectionBuilder = this.createTrainingSectionBuilder();
    const trainingSection = creator(trainingSectionBuilder);
    this.addTrainingSection(trainingSection);
    return this;
  }

  build(): ITrainingProgram {
    return new TrainingProgram(this.trainingSections);
  }

  private createTrainingSectionBuilder(): ITrainingSectionBuilder {
    return new TrainingSectionBuilder();
  }
}
