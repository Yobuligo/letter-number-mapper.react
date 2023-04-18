import { ExerciseType } from "../../components/exercise/ExerciseType";
import { ISymbolMapper } from "./ISymbolMapper";
import { LetterToNumberSymbolMapper } from "./LetterToNumberSymbolMapper";
import { NumberToLetterSymbolMapper } from "./NumberToLetterSymbolMapper";

export const getSymbolMapperByExerciseType = (
  exerciseType: ExerciseType
): ISymbolMapper => {
  if (exerciseType === ExerciseType.LETTER_TO_NUMBER) {
    return LetterToNumberSymbolMapper;
  } else {
    return NumberToLetterSymbolMapper;
  }
};
