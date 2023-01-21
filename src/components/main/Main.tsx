import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { Display } from "../display/Display";
import Keyboard from "../keyboard/Keyboard";
import Settings from "../settings/Settings";
import styles from "./Main.module.css";

export const Main: React.FC = () => {
  const context = useContext(AppContext);

  const onKeyboardClickHandler = (selectedSymbol: string) => {
    context.settings.solveExercise(selectedSymbol);
  };

  return (
    <div className={styles.main}>
      <Display
        symbol={context.settings.symbol}
        exerciseType={context.settings.exerciseType}
      />
      <Keyboard
        keyboardType={context.settings.keyboardType}
        clickHandler={onKeyboardClickHandler}
      />
      <Settings />
    </div>
  );
};
