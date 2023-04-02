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
  onFail(
    onFailHandler: (trainingExercise: ITrainingExercise) => void
  ): void;
  onSucceed(
    onSucceedHandler: (trainingExercise: ITrainingExercise) => void
  ): void;
}
