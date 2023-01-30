import { ITrainingSymbol } from "./ITrainingSymbol";

/**
 * An implementation of that interface is responsible for shift up or shift down a ITrainingSymbol
 * depending on if it was solved in a ITrainingExercise or not
 */
export interface ITrainingSymbolShifter {
  shiftUp(trainingSymbol: ITrainingSymbol): void;
  shiftDown(trainingSymbol: ITrainingSymbol): void;
}
