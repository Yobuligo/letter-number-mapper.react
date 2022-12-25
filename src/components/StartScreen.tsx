import { useState } from "react";
import Field from "./field/Field";
import Menu from "./menu/Menu";
import Options from "./Options/Options";
import styles from "./StartScreen.module.css";

export const StartScreen: React.FC = () => {
  const [showOptions, setShowOptions] = useState(false);

  const onShowOptionsHandler = () => {
    setShowOptions((value) => {
      return !value;
    });
  };

  return (
    <div className={styles.startScreen}>
      <Menu onSetupGame={onShowOptionsHandler} />
      {showOptions ? <Options /> : ""}
      <Field />
    </div>
  );
};
