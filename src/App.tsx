import React from "react";
import "./App.css";
import { Exercise } from "./components/exercise/Exercise";
import { ExerciseType } from "./components/exercise/ExerciseType";
import Keyboard from "./components/keyboard/Keyboard";
import { KeyboardType } from "./components/keyboard/KeyboardType";

const App: React.FC = () => {
  return (
    <>
      <Exercise symbol={"3"} exerciseType={ExerciseType.NUMBER_TO_LETTER} />
      {/* <Exercise symbol={"F"} exerciseType={ExerciseType.LETTER} /> */}
      <Keyboard keyboardType={KeyboardType.LETTER} />
    </>
  );
};

export default App;
