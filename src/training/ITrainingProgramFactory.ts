import { ExerciseType } from "../components/exercise/ExerciseType";
import { ITrainingProgram } from "./model/ITrainingProgram";

/**
 * An implementation of this interface is responsible for creating new instances of {@link ITrainingProgram}.
 */
export interface ITrainingProgramInfo {
  create(exerciseType: ExerciseType): ITrainingProgram;
}
