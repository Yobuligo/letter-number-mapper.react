import { ProbabilityWeight } from "./../../Types/Types";
import { ITrainingSection } from "./ITrainingSection";

/**
 * An implementation of this interface is responsible for giving insides into a ITrainingProgram.
 */
export interface ITrainingProgramInfo {
  readonly probabilityWeightSum: ProbabilityWeight;
  findTrainingSectionByProbability(probability: number): ITrainingSection;
}
