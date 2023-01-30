import { ITrainingSection } from "./ITrainingSection";

/**
 * An implementation of this interface is responsible for picking a ITrainingSection from a whole ITrainingProgram.
 * It calculates randomized the ITrainingSection from a ITrainingProgram.
 * In case a ITrainingSection is empty (contains no ITrainingSymbols) it is not considered.
 */
export interface ITrainingSectionPicker {
  next(): ITrainingSection;
}
