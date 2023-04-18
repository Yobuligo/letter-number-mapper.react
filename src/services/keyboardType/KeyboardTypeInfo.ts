import { ExerciseType } from "../../components/exercise/ExerciseType";
import { IKeyboardTypeInfo } from "./IKeyboardTypeInfo";
import { KeyboardType } from "../../components/keyboard/KeyboardType";

class KeyboardTypeInfoDefault implements IKeyboardTypeInfo {
  get(exerciseType: ExerciseType): KeyboardType {
    if (exerciseType === ExerciseType.LETTER_TO_NUMBER) {
      return KeyboardType.NUMBER;
    } else {
      return KeyboardType.LETTER;
    }
  }
}

export const KeyboardTypeInfo = new KeyboardTypeInfoDefault();
