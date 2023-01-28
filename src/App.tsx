import React, { useEffect, useState } from "react";
import "./App.css";
import { AppContext } from "./AppContext";
import {
  ExerciseType,
  EXERCISE_TYPE
} from "./components/exercise/ExerciseType";
import { SolutionStatus } from "./components/exercise/SolutionStatus";
import { KeyboardType } from "./components/keyboard/KeyboardType";
import { Main } from "./components/main/Main";
import { useDebounce } from "./hooks/useDebounce";
import { useSolutionStatus } from "./hooks/useSolutionStatus";
import { LetterToNumberSymbolMapper } from "./services/symbolMapper/LetterToNumberSymbolMapper";
import { NumberToLetterSymbolMapper } from "./services/symbolMapper/NumberToLetterSymbolMapper";
import { LetterSymbolPicker } from "./services/symbolPicker/LetterSymbolPicker";
import { NumberSymbolPicker } from "./services/symbolPicker/NumberSymbolPicker";
import { LetterTrainingProgramInitializer } from "./services/trainingProgramInitializer/LetterTrainingProgramInitializer";
import { NumberTrainingProgramInitializer } from "./services/trainingProgramInitializer/NumberTrainingProgramInitializer";
import { Letters, Numbers } from "./Types/Types";

const App: React.FC = () => {
  const letterTrainingProgram =
    new LetterTrainingProgramInitializer().initialize();
  const numberTrainingProgram =
    new NumberTrainingProgramInitializer().initialize();

  // const trainingExercise = trainingProgram.next()
  // exercise.trainingSymbol
  // exercise.succeeded()
  // exercise.failed()

  const getInitialExerciseType = () => {
    const initialExerciseType = localStorage.getItem(EXERCISE_TYPE);
    if (initialExerciseType === null) {
      localStorage.setItem(EXERCISE_TYPE, ExerciseType.LETTER_TO_NUMBER);
      return ExerciseType.LETTER_TO_NUMBER;
    } else {
      return initialExerciseType as unknown as ExerciseType;
    }
  };

  const [exerciseType, setExerciseType] = useState(getInitialExerciseType());
  const getKeyboardTypeByExerciseType = (exerciseType: ExerciseType) => {
    if (exerciseType === ExerciseType.LETTER_TO_NUMBER) {
      return KeyboardType.NUMBER;
    } else {
      return KeyboardType.LETTER;
    }
  };

  const getSymbolMapperByExerciseType = (exerciseType: ExerciseType) => {
    if (exerciseType === ExerciseType.LETTER_TO_NUMBER) {
      return NumberToLetterSymbolMapper;
    } else {
      return LetterToNumberSymbolMapper;
    }
  };

  const getSymbolPickerByExerciseType = (exerciseType: ExerciseType) => {
    if (exerciseType === ExerciseType.LETTER_TO_NUMBER) {
      return LetterSymbolPicker;
    } else {
      return NumberSymbolPicker;
    }
  };

  const [keyboardType, setKeyboardType] = useState(
    getKeyboardTypeByExerciseType(exerciseType)
  );
  const [symbolMapper, setSymbolMapper] = useState(
    getSymbolMapperByExerciseType(exerciseType)
  );
  const [symbolPicker, setSymbolPicker] = useState(
    getSymbolPickerByExerciseType(exerciseType)
  );
  const [symbol, setSymbol] = useState(symbolPicker.pickNext());

  const updateKeyboardType = (exerciseType: ExerciseType) => {
    setKeyboardType(getKeyboardTypeByExerciseType(exerciseType));
  };

  const updateSymbolMapper = (exerciseType: ExerciseType) => {
    setSymbolMapper(getSymbolMapperByExerciseType(exerciseType));
  };

  const updateSymbolPicker = (exerciseType: ExerciseType) => {
    setSymbolPicker(getSymbolPickerByExerciseType(exerciseType));
  };

  // register on key pressed event (to handle each key)
  useEffect(() => {
    document.addEventListener("keydown", onKeyPressed, true);
    return () => {
      document.removeEventListener("keydown", onKeyPressed, true);
    };
  }, []);

  const addKey = useDebounce(300, (debouncedValue) => {
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
    addKey(uppercasedSymbol);
  };

  useEffect(() => {
    setSymbol(symbolPicker.pickNext());
  }, [symbolPicker]);

  const { solutionStatus, setSolutionStatus } = useSolutionStatus(() =>
    setSymbol(symbolPicker.pickNext())
  );

  const onSetExerciseTypeHandler = (exerciseType: ExerciseType) => {
    localStorage.setItem(EXERCISE_TYPE, exerciseType);
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
