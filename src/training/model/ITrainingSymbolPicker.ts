import { ITrainingSymbol } from "./ITrainingSymbol";

/**
 * An implementation of this interface is responsible for picking a ITrainingSymbol from a whole ITrainingProgram.
 * It calculates randomized the ITrainingSection and finally the ITrainingSymbol from a ITrainingProgram
 */
export interface ITrainingSymbolPicker {
  next(): ITrainingSymbol;
}
