import { ExerciseType } from "../../components/exercise/ExerciseType";
import { ITrainingProgram } from "./ITrainingProgram";

/**
 * An implementation of this interface is responsible to administer objects of type {@link ITrainingProgram}.
 */
export interface ITrainingProgramRepo {
  fetch(exerciseType: ExerciseType): ITrainingProgram;
  reset(): void;
}
