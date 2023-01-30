import { ProbabilityWeight } from "./../../Types/Types";

/**
 * An implementation of this interface is responsible for giving insides into a ITrainingProgram.
 */
export interface ITrainingProgramInfo {
  readonly probabilityWeightSum: ProbabilityWeight;
}
