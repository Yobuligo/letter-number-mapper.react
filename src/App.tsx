import React from "react";
import "./App.css";
import { ExerciseType } from "./components/exercise/ExerciseType";
import { Main } from "./components/main/Main";

const App: React.FC = () => {
  return (
    <>
      <Main symbol={"A"} exerciseType={ExerciseType.LETTER_TO_NUMBER} />
    </>
  );
};

export default App;
