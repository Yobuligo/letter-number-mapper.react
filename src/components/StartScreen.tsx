import Field from "./field/Field";
import Options from "./Options/Options";
import styles from "./StartScreen.module.css";

export const StartScreen: React.FC = () => {
  return (
    <div className={styles.startScreen}>
      <Options />
      <button>Start Game</button>
      <Field />
    </div>
  );
};
