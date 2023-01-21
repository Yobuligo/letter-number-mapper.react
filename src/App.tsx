import React, { useEffect, useState } from "react";
import "./App.css";
import { AppContext } from "./AppContext";
import { ExerciseType } from "./components/exercise/ExerciseType";
import { KeyboardType } from "./components/keyboard/KeyboardType";
import { Main } from "./components/main/Main";
import { LetterToNumberSymbolMapper } from "./symbolMapper/LetterToNumberSymbolMapper";
import { NumberToLetterSymbolMapper } from "./symbolMapper/NumberToLetterSymbolMapper";
import { ISymbolPicker } from "./symbolPicker/ISymbolPicker";
import { LetterSymbolPicker } from "./symbolPicker/LetterSymbolPicker";
import { NumberSymbolPicker } from "./symbolPicker/NumberSymbolPicker";

const App: React.FC = () => {
  const [exerciseType, setExerciseType] = useState(
    ExerciseType.LETTER_TO_NUMBER
  );

  const [keyboardType, setKeyboardType] = useState(KeyboardType.NUMBER);
  const [symbolMapper, setSymbolMapper] = useState(NumberToLetterSymbolMapper);
  const [symbolPicker, setSymbolPicker] =
    useState<ISymbolPicker>(LetterSymbolPicker);
  const [symbol, setSymbol] = useState(symbolPicker.pickNext());
  const [isCorrectSolution, setIsCorrectSolution] = useState<
    Boolean | undefined
  >(undefined);

  const updateKeyboardType = (exerciseType: ExerciseType) => {
    if (exerciseType === ExerciseType.LETTER_TO_NUMBER) {
      setKeyboardType(KeyboardType.NUMBER);
    } else {
      setKeyboardType(KeyboardType.LETTER);
    }
  };

  const updateSymbolMapper = (exerciseType: ExerciseType) => {
    if (exerciseType === ExerciseType.LETTER_TO_NUMBER) {
      setSymbolMapper(NumberToLetterSymbolMapper);
    } else {
      setSymbolMapper(LetterToNumberSymbolMapper);
    }
  };

  const updateSymbolPicker = (exerciseType: ExerciseType) => {
    if (exerciseType === ExerciseType.LETTER_TO_NUMBER) {
      setSymbolPicker(LetterSymbolPicker);
    } else {
      setSymbolPicker(NumberSymbolPicker);
    }
  };

  useEffect(() => {
    setSymbol(symbolPicker.pickNext());
  }, [symbolPicker]);

  useEffect(() => {
    const timer = setTimeout(() => setIsCorrectSolution(undefined), 500);
    return () => {
      clearTimeout(timer);
    };
  }, [isCorrectSolution]);

  const onSetExerciseTypeHandler = (exerciseType: ExerciseType) => {
    console.log(`ExerciseType changed to ${ExerciseType[exerciseType]}`);
    updateKeyboardType(exerciseType);
    updateSymbolMapper(exerciseType);
    updateSymbolPicker(exerciseType);
    setExerciseType(exerciseType);
  };

  const onExerciseSolutionProvided = (selectedSymbol: string) => {
    const mappedSelectedSymbol = symbolMapper.map(selectedSymbol);
    if (mappedSelectedSymbol === symbol) {
      console.log("Correct!");
      setIsCorrectSolution(true);
      setSymbol(symbolPicker.pickNext());
    } else {
      setIsCorrectSolution(false);
      console.log("Wrong, try again");
    }
  };

  return (
    <>
      <AppContext.Provider
        value={{
          settings: {
            exerciseType: exerciseType,
            setExerciseType: onSetExerciseTypeHandler,
            keyboardType: keyboardType,
            symbol: symbol,
            solveExercise: onExerciseSolutionProvided,
            correctSolution: isCorrectSolution,
          },
        }}
      >
        <Main />
      </AppContext.Provider>
    </>
  );
};

export default App;
