import { ITrainingSymbol } from "./ITrainingSymbol";
/**
 * An implementation of this interface represents a ITrainingExercise.
 * It is an exercise to learn a specific ITrainingSymbol.
 * The exercise can either succeed or fail.
 */
export interface ITrainingExercise {
  readonly trainingSymbol: ITrainingSymbol;
  succeeded(): void;
  failed(): void;
}
