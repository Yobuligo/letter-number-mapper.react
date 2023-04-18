import { ExerciseType } from "../../components/exercise/ExerciseType";
import { ISymbolMapper } from "./ISymbolMapper";

export interface ISymbolMapperInfo {
  /**
   * Returns the symbol mapper from the given exercise type.
   */
  get(exerciseType: ExerciseType): ISymbolMapper;

  /**
   * Returns the reverse symbol mapper from the given exercise type.
   * This symbol mapper is used to resolve a given solution.
   * E.g. the user has to enter the number for letter K and the user entered 11.
   * Now we have to convert 11 to the letter to check if the number fits to the requested symbol.
   * So 11 is converted to the letter, which would be K. As we are looking for letter K. The answer is correct.
   */
  getReverse(exerciseType: ExerciseType): ISymbolMapper;
}
