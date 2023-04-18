import { ExerciseType } from "../components/exercise/ExerciseType";
import { SolutionStatus } from "../components/exercise/SolutionStatus";
import { ITrainingSymbol } from "../training/model/ITrainingSymbol";

export interface ISolvingTime {
  trainingSymbol: ITrainingSymbol;
  time: number;
  /**
   * When creating a new SolvingTime instance the numberSuccessfulAnswers have to be set separately instead of taken the value from the trainingSymbol.
   * Otherwise the solving time would always only have the current numberSuccessfulAnswers but not the one at the time when a training exercise was solved.
   */
  numberSuccessfulAnswers: number;
  solutionStatus: SolutionStatus;
  exerciseType: ExerciseType;
}
