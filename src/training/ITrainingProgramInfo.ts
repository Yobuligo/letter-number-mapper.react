import { ExerciseType } from "../components/exercise/ExerciseType";
import { ITrainingProgram } from "./model/ITrainingProgram";

export interface ITrainingProgramInfo {
  get(exerciseType: ExerciseType): ITrainingProgram;
}
