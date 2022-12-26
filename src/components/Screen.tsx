import { useState } from "react";
import { Direction } from "../gameConfig/Direction";
import { Mode } from "../gameConfig/Mode";
import Field from "./field/Field";
import GameConfigContext from "./GameConfigContext";

import Menu from "./menu/Menu";
import Options from "./Options/Options";
import styles from "./Screen.module.css";

export const Screen: React.FC = () => {
  const [showOptions, setShowOptions] = useState(false);

  const onShowOptionsHandler = () => {
    setShowOptions((value) => {
      return !value;
    });
  };

  return (
    <GameConfigContext.Provider
      value={{
        showResult: false,
        direction: Direction.NUMBER_TO_LETTER,
        mode: Mode.RANDOM,
      }}
    >
      <div className={styles.screen}>
        <Menu onSetupGame={onShowOptionsHandler} />
        {showOptions ? <Options /> : ""}
        <Field />
      </div>
    </GameConfigContext.Provider>
  );
};
