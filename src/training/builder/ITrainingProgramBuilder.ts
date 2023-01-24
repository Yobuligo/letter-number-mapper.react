import { ProbabilityWeight } from "../../Types/Types";
import { ITrainingProgram } from "../model/ITrainingProgram";
import { ITrainingSection } from "../model/ITrainingSection";
import { ITrainingSectionBuilder } from "./ITrainingSectionBuilder";

/**
 * An implementation of this interface is a builder that is responsible for building a ITrainingProgram.
 * It provides methods for creating and adding ITrainingSections
 */
export interface ITrainingProgramBuilder {
  addTrainingSection(
    trainingSection: ITrainingSection
  ): ITrainingProgramBuilder;

  createEmptyTrainingSection(
    probabilityWeight: ProbabilityWeight
  ): ITrainingProgramBuilder;

  createTrainingSection(
    probabilityWeight: ProbabilityWeight,
    creator: (
      trainingSectionBuilder: ITrainingSectionBuilder
    ) => ITrainingSection
  ): ITrainingProgramBuilder;

  build(): ITrainingProgram;
}
