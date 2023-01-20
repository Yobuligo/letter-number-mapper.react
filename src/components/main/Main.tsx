import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { SymbolMapper } from "../../symbolInfo/SymbolMapper";
import { Display } from "../display/Display";
import Keyboard from "../keyboard/Keyboard";
import Settings from "../settings/Settings";
import styles from "./Main.module.css";

export const Main: React.FC<{
  symbol: string;
}> = (props) => {
  const context = useContext(AppContext);

  const onKeyboardClickHandler = (selectedSymbol: string) => {
    console.log(SymbolMapper.numberToLetter(selectedSymbol));
  };

  return (
    <div className={styles.main}>
      <Display
        symbol={props.symbol}
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
