import { ITrainingSymbol } from "./ITrainingSymbol";

/**
 * An implementation of this interface represents a ITrainingExercise.
 * It is an exercise to learn a specific ITrainingSymbol.
 * The exercise can either succeed or fail.
 */
export interface ITrainingExercise {
  readonly trainingSymbol: ITrainingSymbol;
  failed(): void;
  succeeded(): void;
  registerOnFailed(
    eventHandler: (trainingExercise: ITrainingExercise) => void
  ): void;
  registerOnSucceed(
    eventHandler: (trainingExercise: ITrainingExercise) => void
  ): void;
}
