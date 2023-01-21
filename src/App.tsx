import React, { useState } from "react";
import "./App.css";
import { AppContext } from "./AppContext";
import { ExerciseType } from "./components/exercise/ExerciseType";
import { KeyboardType } from "./components/keyboard/KeyboardType";
import { Main } from "./components/main/Main";
import { LetterToNumberMapper } from "./symbolMapper/LetterToNumberMapper";
import { NumberToLetterMapper } from "./symbolMapper/NumberToLetterMapper";

const App: React.FC = () => {
  const [exerciseType, setExerciseType] = useState(
    ExerciseType.LETTER_TO_NUMBER
  );

  const [keyboardType, setKeyboardType] = useState(KeyboardType.NUMBER);
  const [symbolMapper, setSymbolMapper] = useState(new NumberToLetterMapper());

  const updateKeyboardType = (exerciseType: ExerciseType) => {
    if (exerciseType === ExerciseType.LETTER_TO_NUMBER) {
      setKeyboardType(KeyboardType.NUMBER);
    } else {
      setKeyboardType(KeyboardType.LETTER);
    }
  };

  const updateSymbolMapper = (exerciseType: ExerciseType) => {
    if (exerciseType === ExerciseType.LETTER_TO_NUMBER) {
      setSymbolMapper(new NumberToLetterMapper());
    } else {
      setSymbolMapper(new LetterToNumberMapper());
    }
  };

  const onSetExerciseTypeHandler = (exerciseType: ExerciseType) => {
    console.log(`ExerciseType changed to ${ExerciseType[exerciseType]}`);
    updateKeyboardType(exerciseType);
    updateSymbolMapper(exerciseType);
    setExerciseType(exerciseType);
  };

  return (
    <>
      <AppContext.Provider
        value={{
          settings: {
            exerciseType: exerciseType,
            setExerciseType: onSetExerciseTypeHandler,
            keyboardType: keyboardType,
            symbolMapper: symbolMapper,
          },
        }}
      >
        <Main symbol={"A"} />
      </AppContext.Provider>
    </>
  );
};

export default App;
