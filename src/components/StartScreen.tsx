import Field from "./field/Field";
import Menu from "./menu/Menu";
import Options from "./Options/Options";
import styles from "./StartScreen.module.css";

export const StartScreen: React.FC = () => {
  return (
    <div className={styles.startScreen}>
      <Menu />
      <Options />
      <Field />
    </div>
  );
};
