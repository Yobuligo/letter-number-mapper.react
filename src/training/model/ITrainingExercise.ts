import { SolutionStatus } from "../../components/exercise/SolutionStatus";
import { ITrainingSymbol } from "./ITrainingSymbol";

/**
 * An implementation of this interface represents a ITrainingExercise.
 * It is an exercise to learn a specific ITrainingSymbol.
 * The exercise can either succeed or fail.
 */
export interface ITrainingExercise {
  readonly isSolved: boolean;
  readonly trainingSymbol: ITrainingSymbol;
  readonly solutionStatus: SolutionStatus;
  destruct(): void;
  failed(): void;
  succeeded(): void;
  onDestruct(
    onDestructHandler: (trainingExercise: ITrainingExercise) => void
  ): void;
  onFail(onFailHandler: (trainingExercise: ITrainingExercise) => void): void;
  onSucceed(
    onSucceedHandler: (trainingExercise: ITrainingExercise) => void
  ): void;
}
