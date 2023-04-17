import { SolutionStatus } from "../../components/exercise/SolutionStatus";
import { ITrainingExercise } from "./ITrainingExercise";
import { ITrainingSymbol } from "./ITrainingSymbol";
import { TrainingExerciseState } from "./TrainingExerciseState";

type EventHandler = (trainingExercise: ITrainingExercise) => void;

export class TrainingExercise implements ITrainingExercise {
  private state: TrainingExerciseState = TrainingExerciseState.Open;
  private onFailHandlers: EventHandler[] = [];
  private onSucceedHandlers: EventHandler[] = [];

  constructor(public trainingSymbol: ITrainingSymbol) {
    if (trainingSymbol === undefined) {
      throw new Error(
        `Error when creating training exercise. The training symbol is undefined.`
      );
    }
  }

  failed(): void {
    if (this.isSolved) {
      return;
    }
    this.trainingSymbol.failed();
    this.raiseOnFailed();
  }

  get isSolved(): boolean {
    return this.state === TrainingExerciseState.Succeeded;
  }

  get solutionStatus(): SolutionStatus {
    switch (this.state) {
      case TrainingExerciseState.Open:
        return SolutionStatus.NotProvided;
      case TrainingExerciseState.Succeeded:
        return SolutionStatus.Successful;
      case TrainingExerciseState.Failed:
        return SolutionStatus.Failed;
      default:
        throw new Error(
          "Error when getting exercise solution state. Exercise state is unknown and cannot be mapped."
        );
    }
  }

  succeeded(): void {
    if (this.isSolved) {
      return;
    }
    this.state = TrainingExerciseState.Succeeded;
    this.trainingSymbol.succeed();
    this.raiseOnSucceed();
  }

  onFail(onFailHandler: (trainingExercise: ITrainingExercise) => void): void {
    this.onFailHandlers.push(onFailHandler);
  }

  onSucceed(
    onSucceedHandler: (trainingExercise: ITrainingExercise) => void
  ): void {
    this.onSucceedHandlers.push(onSucceedHandler);
  }

  private raiseOnFailed() {
    this.onFailHandlers.forEach((onFailHandler) => {
      onFailHandler(this);
    });
  }

  private raiseOnSucceed() {
    this.onSucceedHandlers.forEach((onSucceedHandler) => {
      onSucceedHandler(this);
    });
  }
}
