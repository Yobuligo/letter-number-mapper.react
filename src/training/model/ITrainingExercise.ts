import { ITrainingSymbol } from "./ITrainingSymbol";
import { TrainingExerciseState } from "./TrainingExerciseState";
/**
 * An implementation of this interface represents a ITrainingExercise.
 * It is an exercise to learn a specific ITrainingSymbol.
 * The exercise can either succeed or fail.
 */
export interface ITrainingExercise {
  readonly trainingSymbol: ITrainingSymbol;
  succeeded(): void;
  failed(): void;
  registerOnStateChanged(
    eventHandler: (
      trainingSymbol: ITrainingSymbol,
      newState: TrainingExerciseState
    ) => void
  ): void;
}
