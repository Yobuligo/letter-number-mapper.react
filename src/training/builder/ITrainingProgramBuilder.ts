import { ITrainingProgram } from "../model/ITrainingProgram";
import { ITrainingSection } from "../model/ITrainingSection";
import { ITrainingSectionBuilder } from "./ITrainingSectionBuilder";

/**
 * An implementation of this interface is a builder that is responsible for building a ITrainingProgram.
 * It provides methods for creating and adding ITrainingSections.
 * The order in which ITrainingSections are added defines direct follower and predecessor of a ITrainingSection.
 */
export interface ITrainingProgramBuilder {
  addTrainingSection(
    trainingSection: ITrainingSection
  ): ITrainingProgramBuilder;

  createEmptyTrainingSection(): ITrainingProgramBuilder;

  createTrainingSection(
    creator: (
      trainingSectionBuilder: ITrainingSectionBuilder
    ) => ITrainingSection
  ): ITrainingProgramBuilder;

  build(): ITrainingProgram;
}
