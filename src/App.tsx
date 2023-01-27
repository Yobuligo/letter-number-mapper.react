import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import { AppContext } from "./AppContext";
import { ExerciseType } from "./components/exercise/ExerciseType";
import { SolutionStatus } from "./components/exercise/SolutionStatus";
import { KeyboardType } from "./components/keyboard/KeyboardType";
import { Main } from "./components/main/Main";
import { LetterTrainingProgramInitializer } from "./services/trainingProgramInitializer/LetterTrainingProgramInitializer";
import { NumberTrainingProgramInitializer } from "./services/trainingProgramInitializer/NumberTrainingProgramInitializer";
import { LetterToNumberSymbolMapper } from "./services/symbolMapper/LetterToNumberSymbolMapper";
import { NumberToLetterSymbolMapper } from "./services/symbolMapper/NumberToLetterSymbolMapper";
import { ISymbolPicker } from "./services/symbolPicker/ISymbolPicker";
import { LetterSymbolPicker } from "./services/symbolPicker/LetterSymbolPicker";
import { NumberSymbolPicker } from "./services/symbolPicker/NumberSymbolPicker";
import { Letters, Numbers } from "./Types/Types";
import { useDebounce } from "./hooks/useDebounce";
import { useSolutionStatus } from "./hooks/useSolutionStatus";

const App: React.FC = () => {
  const letterTrainingProgram =
    new LetterTrainingProgramInitializer().initialize();
  const numberTrainingProgram =
    new NumberTrainingProgramInitializer().initialize();

  // const trainingExercise = trainingProgram.next()
  // exercise.trainingSymbol
  // exercise.succeeded()
  // exercise.failed()

  const [exerciseType, setExerciseType] = useState(
    ExerciseType.LETTER_TO_NUMBER
  );

  const [keyboardType, setKeyboardType] = useState(KeyboardType.NUMBER);
  const [symbolMapper, setSymbolMapper] = useState(NumberToLetterSymbolMapper);
  const [symbolPicker, setSymbolPicker] =
    useState<ISymbolPicker>(LetterSymbolPicker);
  const [symbol, setSymbol] = useState(symbolPicker.pickNext());
  // const [solutionStatus, setSolutionStatus] = useState(
  //   SolutionStatus.NOT_PROVIDED
  // );
  // let previousSolutionStatus = SolutionStatus.NOT_PROVIDED;

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

  // register on key pressed event (to handle each key)
  useEffect(() => {
    document.addEventListener("keydown", onKeyPressed, true);
    return () => {
      document.removeEventListener("keydown", onKeyPressed, true);
    };
  }, [symbol, symbolMapper]);

  const addNewValue = useDebounce(300, (debouncedValue) => {
    console.log(`Solution provided: ${debouncedValue}`);
    onExerciseSolutionProvided(debouncedValue);
  });

  const onKeyPressed = (keyboardEvent: KeyboardEvent) => {
    const uppercasedSymbol = keyboardEvent.key.toUpperCase();
    console.log(`The key ${uppercasedSymbol} was pressed`);
    //filter out/ignore all other keys but the letters/numbers
    if (
      !Letters.includes(uppercasedSymbol) &&
      !Numbers.includes(uppercasedSymbol) &&
      uppercasedSymbol !== "0"
    ) {
      return true;
    }
    addNewValue(uppercasedSymbol);
  };

  useEffect(() => {
    setSymbol(symbolPicker.pickNext());
  }, [symbolPicker]);

  const { solutionStatus, setSolutionStatus } = useSolutionStatus(() =>
    setSymbol(symbolPicker.pickNext())
  );

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
      setSolutionStatus(SolutionStatus.SUCCESSFUL);
    } else {
      setSolutionStatus(SolutionStatus.FAILED);
      console.log(
        `Wrong solution (${mappedSelectedSymbol}) provided, try again`
      );
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
          },
          exercise: {
            symbol: symbol,
            provideExerciseSolution: onExerciseSolutionProvided,
            solutionStatus: solutionStatus,
          },
        }}
      >
        <Main />
      </AppContext.Provider>
    </>
  );
};

export default App;
