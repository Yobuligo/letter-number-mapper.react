import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { MaterialIcons } from "../../assets/icons/MaterialIcons";
import Icon from "../icon/Icon";
import styles from "./StartScreen.module.css";
import { Statistics } from "./Statistics";
import { ExerciseType } from "../exercise/ExerciseType";

export const StartScreen: React.FC = () => {
  const context = useContext(AppContext);
  const exerciseType = context.settings.storedParameters.exerciseType;
  return (
    <div className={styles.startScreen}>
      <div className={styles.playMode}>
        <h3>Spielmodus:</h3>
        <div
          className={`${styles.toggleButton} ${styles.toggleButtonLeft} ${
            exerciseType === ExerciseType.NUMBER_TO_LETTER
              ? `${styles.active}`
              : ""
          }`}
          onClick={() =>
            context.settings.setExerciseType(ExerciseType.NUMBER_TO_LETTER)
          }
        >
          <div
            className={`${styles.toggleButtonIcon} ${styles.toggleButtonIconNumberToLetter}`}
          ></div>
          <div className={styles.toggleButtonCaption}>Number to Letter</div>
        </div>
        <div
          className={`${styles.toggleButton} ${styles.toggleButtonRight} ${
            exerciseType === ExerciseType.LETTER_TO_NUMBER
              ? `${styles.active}`
              : ""
          }`}
          onClick={() =>
            context.settings.setExerciseType(ExerciseType.LETTER_TO_NUMBER)
          }
        >
          <div className={styles.toggleButtonCaption}>Letter to Number</div>
          <div
            className={`${styles.toggleButtonIcon} ${styles.toggleButtonIconLetterToNumber}`}
          ></div>
        </div>
        <div className={styles.startButton}>
          <Icon icon={MaterialIcons.PlayCircle}></Icon>
          <div>PLAY</div>
        </div>
      </div>
      <Statistics />
    </div>
  );
};
