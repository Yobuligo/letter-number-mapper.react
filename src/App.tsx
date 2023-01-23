import React, { useEffect, useState } from "react";
import "./App.css";
import { AppContext } from "./AppContext";
import { ExerciseType } from "./components/exercise/ExerciseType";
import { SolutionStatus } from "./components/exercise/SolutionStatus";
import { KeyboardType } from "./components/keyboard/KeyboardType";
import { Main } from "./components/main/Main";
import { ITrainingProgram } from "./model/ITrainingProgram";
import { ITrainingProgramBuilder } from "./services/ITrainingProgramBuilder";
import { LetterToNumberSymbolMapper } from "./services/symbolMapper/LetterToNumberSymbolMapper";
import { NumberToLetterSymbolMapper } from "./services/symbolMapper/NumberToLetterSymbolMapper";
import { ISymbolPicker } from "./services/symbolPicker/ISymbolPicker";
import { LetterSymbolPicker } from "./services/symbolPicker/LetterSymbolPicker";
import { NumberSymbolPicker } from "./services/symbolPicker/NumberSymbolPicker";
import { TrainingProgramBuilder } from "./services/TrainingProgramBuilder";
import { TrainingSectionBuilder } from "./services/TrainingSectionBuilder";

const createTrainingProgram = (): ITrainingProgram => {
  const trainingProgramBuilder: ITrainingProgramBuilder =
    new TrainingProgramBuilder();

  return trainingProgramBuilder
    .addTrainingSection(
      new TrainingSectionBuilder(50)
        .addTrainingSymbol({ symbol: "A", numberSuccessfulAnswers: 0 })
        .addTrainingSymbol({ symbol: "B", numberSuccessfulAnswers: 0 })
        .addTrainingSymbol({ symbol: "C", numberSuccessfulAnswers: 0 })
        .addTrainingSymbol({ symbol: "D", numberSuccessfulAnswers: 0 })
        .build()
    )
    .build();
};

const App: React.FC = () => {
  const trainingProgram = createTrainingProgram()
  
  // register on key pressed event (to handle each key)
  useEffect(() => {
    document.addEventListener("keydown", onKeyPressed, true);
  }, []);

  const onKeyPressed = (keyboardEvent: KeyboardEvent) => {
    console.log(`The key ${keyboardEvent.key} was pressed`);
    onExerciseSolutionProvided(keyboardEvent.key.toUpperCase());
  };

  const [exerciseType, setExerciseType] = useState(
    ExerciseType.LETTER_TO_NUMBER
  );

  const [keyboardType, setKeyboardType] = useState(KeyboardType.NUMBER);
  const [symbolMapper, setSymbolMapper] = useState(NumberToLetterSymbolMapper);
  const [symbolPicker, setSymbolPicker] =
    useState<ISymbolPicker>(LetterSymbolPicker);
  const [symbol, setSymbol] = useState(symbolPicker.pickNext());
  const [solutionStatus, setSolutionStatus] = useState(
    SolutionStatus.NOT_PROVIDED
  );
  let previousSolutionStatus = SolutionStatus.NOT_PROVIDED;

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
    let timer: NodeJS.Timeout;
    if (solutionStatus !== SolutionStatus.NOT_PROVIDED) {
      previousSolutionStatus = solutionStatus;
      timer = setTimeout(() => {
        setSolutionStatus(SolutionStatus.NOT_PROVIDED);
        if (previousSolutionStatus === SolutionStatus.SUCCESSFUL) {
          setSymbol(symbolPicker.pickNext());
        }
        previousSolutionStatus = SolutionStatus.NOT_PROVIDED;
      }, 300);
    }
    return () => {
      if (timer !== undefined) {
        clearTimeout(timer);
      }
    };
  }, [solutionStatus]);

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
