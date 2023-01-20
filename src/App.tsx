import React, { useState } from "react";
import "./App.css";
import { AppContext } from "./AppContext";
import { ExerciseType } from "./components/exercise/ExerciseType";
import { KeyboardType } from "./components/keyboard/KeyboardType";
import { Main } from "./components/main/Main";

const App: React.FC = () => {
  const [exerciseType, setExerciseType] = useState(
    ExerciseType.LETTER_TO_NUMBER
  );

  const [keyboardType, setKeyboardType] = useState(KeyboardType.NUMBER);

  const updateKeyboardType = (exerciseType: ExerciseType) => {
    if (exerciseType === ExerciseType.LETTER_TO_NUMBER) {
      setKeyboardType(KeyboardType.NUMBER);
    } else {
      setKeyboardType(KeyboardType.LETTER);
    }
  };

  const onSetExerciseTypeHandler = (exerciseType: ExerciseType) => {
    console.log(`ExerciseType changed to ${ExerciseType[exerciseType]}`);
    updateKeyboardType(exerciseType);
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
          },
        }}
      >
        <Main symbol={"A"} />
      </AppContext.Provider>
    </>
  );
};

export default App;
