import { ExerciseType } from "../../components/exercise/ExerciseType";
import { ISymbolMapper } from "./ISymbolMapper";
import { ISymbolMapperInfo } from "./ISymbolMapperInfo";
import { LetterToNumberSymbolMapper } from "./LetterToNumberSymbolMapper";
import { NumberToLetterSymbolMapper } from "./NumberToLetterSymbolMapper";

class SymbolMapperInfoDefault implements ISymbolMapperInfo {
  get(exerciseType: ExerciseType): ISymbolMapper {
    if (exerciseType === ExerciseType.LETTER_TO_NUMBER) {
      return LetterToNumberSymbolMapper;
    } else {
      return NumberToLetterSymbolMapper;
    }
  }

  getReverse(exerciseType: ExerciseType): ISymbolMapper {
    if (exerciseType === ExerciseType.LETTER_TO_NUMBER) {
      return NumberToLetterSymbolMapper;
    } else {
      return LetterToNumberSymbolMapper;
    }
  }
}

export const SymbolMapperInfo = new SymbolMapperInfoDefault();
