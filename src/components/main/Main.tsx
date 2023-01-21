import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import settingsImage from "../../images/settings.png";
import { SymbolMapper } from "../../symbolInfo/SymbolMapper";
import { Display } from "../display/Display";
import Keyboard from "../keyboard/Keyboard";
import Settings from "../settings/Settings";
import IToolbarAction from "../toolbar/IToolbarAction";
import Toolbar from "../toolbar/Toolbar";
import styles from "./Main.module.css";

export const Main: React.FC<{
  symbol: string;
}> = (props) => {
  const context = useContext(AppContext);

  const onKeyboardClickHandler = (selectedSymbol: string) => {
    console.log(SymbolMapper.numberToLetter(selectedSymbol));
  };

  const toolbarActions: IToolbarAction[] = [
    {
      source: settingsImage,
      text: "Settings",
      onClickHandler: () => {
        console.log(`Settings button was clicked`);
      },
    },
  ];

  return (
    <div className={styles.main}>
      <Toolbar toolbarActions={toolbarActions} />
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
