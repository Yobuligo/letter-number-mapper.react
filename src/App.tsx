import React, { useState } from "react";
import "./App.css";
import { Exercise } from "./components/exercise/Exercise";
import { ExerciseType } from "./components/exercise/ExerciseType";
import Keyboard from "./components/keyboard/Keyboard";
import { KeyboardType } from "./components/keyboard/KeyboardType";
import Settings from "./components/settings/Settings";
import { AppContext } from "./AppContext";

const App: React.FC = () => {
  const [exerciseType, setExerciseType] = useState(
    ExerciseType.LETTER_TO_NUMBER
  );

  const onExerciseTypeChangedHandler = (exerciseType: ExerciseType) => {
    console.log(`ExerciseType changed to ${ExerciseType[exerciseType]}`);
    setExerciseType(exerciseType);
  };

  return (
    <>
      <AppContext.Provider
        value={{
          settings: {
            exerciseType: exerciseType,
            setExerciseType: onExerciseTypeChangedHandler,
          },
        }}
      >
        <Exercise symbol={"3"} exerciseType={ExerciseType.NUMBER_TO_LETTER} />
        {/* <Exercise symbol={"F"} exerciseType={ExerciseType.LETTER} /> */}
        <Keyboard keyboardType={KeyboardType.LETTER} />
        <Settings />
      </AppContext.Provider>
    </>
  );
};

export default App;
