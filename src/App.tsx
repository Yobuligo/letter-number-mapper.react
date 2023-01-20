import React from "react";
import "./App.css";
import Keyboard from "./components/keyboard/Keyboard";
import { KeyboardType } from "./components/keyboard/KeyboardType";

const App: React.FC = () => {
  return (
    <>
      <Keyboard keyboardType={KeyboardType.NUMBER} />
    </>
  );
};

export default App;
