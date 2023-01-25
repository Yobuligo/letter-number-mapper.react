import { TrainingProgram } from "./../model/TrainingProgram";

import { ProbabilityWeight } from "../../Types/Types";
import { ITrainingProgram } from "../model/ITrainingProgram";
import { ITrainingSection } from "../model/ITrainingSection";
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

  createEmptyTrainingSection(
    probabilityWeight: number
  ): ITrainingProgramBuilder {
    const trainingSection =
      this.createTrainingSectionBuilder(probabilityWeight).build();
    this.addTrainingSection(trainingSection);
    return this;
  }

  createTrainingSection(
    probabilityWeight: ProbabilityWeight,
    creator: (
      trainingSectionBuilder: ITrainingSectionBuilder
    ) => ITrainingSection
  ): ITrainingProgramBuilder {
    const trainingSectionBuilder =
      this.createTrainingSectionBuilder(probabilityWeight);
    const trainingSection = creator(trainingSectionBuilder);
    this.addTrainingSection(trainingSection);
    return this;
  }

  build(): ITrainingProgram {
    return new TrainingProgram(this.trainingSections);
  }

  private createTrainingSectionBuilder(
    probabilityWeight: ProbabilityWeight
  ): ITrainingSectionBuilder {
    return new TrainingSectionBuilder(probabilityWeight);
  }
}
