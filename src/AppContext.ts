import { createContext } from "react";
import { ExerciseType } from "./components/exercise/ExerciseType";
import { KeyboardType } from "./components/keyboard/KeyboardType";
import { ISymbolMapper } from "./symbolMapper/ISymbolMapper";
import { LetterToNumberMapper } from "./symbolMapper/LetterToNumberMapper";

export const AppContext = createContext<{
  settings: {
    exerciseType: ExerciseType;
    setExerciseType: (exerciseType: ExerciseType) => void;
    keyboardType: KeyboardType;
    symbolMapper: ISymbolMapper;
  };
}>({
  settings: {
    exerciseType: ExerciseType.NUMBER_TO_LETTER,
    setExerciseType: () => {},
    keyboardType: KeyboardType.LETTER,
    symbolMapper: new LetterToNumberMapper(),
  },
});
