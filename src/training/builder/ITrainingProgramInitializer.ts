import { ITrainingProgram } from "../model/ITrainingProgram";

/**
 * An implementation of this interface is responsible for creating a full customized ITrainingProgram with ITrainingSections and TrainingSymbols
 */
export interface ITrainingProgramInitializer {
  initialize(): ITrainingProgram;
}
