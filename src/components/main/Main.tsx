import React from "react";
import { SymbolMapper } from "../../symbolInfo/SymbolMapper";
import { Display } from "../display/Display";
import { ExerciseType } from "../exercise/ExerciseType";
import Keyboard from "../keyboard/Keyboard";
import { KeyboardType } from "../keyboard/KeyboardType";
import styles from "./Main.module.css";

export const Main: React.FC<{
  symbol: string;
  exerciseType: ExerciseType;
}> = (props) => {
  const keyboardType =
    props.exerciseType == ExerciseType.LETTER_TO_NUMBER
      ? KeyboardType.NUMBER
      : KeyboardType.LETTER;

  const onKeyboardClickHandler = (selectedSymbol: string) => {
    console.log(SymbolMapper.numberToLetter(selectedSymbol));
  };

  return (
    <div className={styles.main}>
      <Display symbol={props.symbol} exerciseType={props.exerciseType} />
      <Keyboard
        keyboardType={keyboardType}
        clickHandler={onKeyboardClickHandler}
      />
    </div>
  );
};
