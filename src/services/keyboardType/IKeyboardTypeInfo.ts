import { ExerciseType } from "../../components/exercise/ExerciseType";
import { KeyboardType } from "../../components/keyboard/KeyboardType";

export interface IKeyboardTypeInfo {
  get(exerciseType: ExerciseType): KeyboardType;
}
