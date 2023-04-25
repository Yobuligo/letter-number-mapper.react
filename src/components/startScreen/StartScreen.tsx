import { MaterialIcons } from "../../assets/icons/MaterialIcons";
import Icon from "../icon/Icon";
import { ProgressIndicator } from "./ProgressIndicator";
import styles from "./StartScreen.module.css";
import { Statistics } from "./Statistics";

export const StartScreen: React.FC = () => {
  return (
    <div className={styles.startScreen}>
      <div className={styles.playMode}>
        <h3>Play mode:</h3>
        <div
          className={`${styles.toggleExerciseButton} ${styles.numberToLetterButton}`}
        ></div>
        <div
          className={`${styles.toggleExerciseButton} ${styles.letterToNumberButton}`}
        ></div>
        <div className={styles.startButton}>
          <Icon icon={MaterialIcons.PlayCircle}></Icon>
          <h1>PLAY</h1>
        </div>
      </div>
      <Statistics />
      <ProgressIndicator />
    </div>
  );
};
