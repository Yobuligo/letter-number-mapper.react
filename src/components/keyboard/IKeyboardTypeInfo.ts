import { ExerciseType } from "../exercise/ExerciseType";
import { KeyboardType } from "./KeyboardType";

export interface IKeyboardTypeInfo {
  get(exerciseType: ExerciseType): KeyboardType;
}
