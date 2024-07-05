import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { MaterialIcons } from "../../assets/icons/MaterialIcons";
import { useTranslation } from "../../hooks/useTranslation";
import { ITrainingProgram } from "../../training/model/ITrainingProgram";
import { ExerciseType } from "../exercise/ExerciseType";
import Icon from "../icon/Icon";
import styles from "./StartScreen.module.scss";
import { Statistics } from "./statistics/Statistics";

export const StartScreen: React.FC<{
  trainingProgram: ITrainingProgram;
  onPlay: () => void;
}> = (props) => {
  const { t } = useTranslation();
  const context = useContext(AppContext);
  const exerciseType = context.settings.storedParameters.exerciseType;
  const isNumberToLetter = exerciseType === ExerciseType.NUMBER_TO_LETTER;
  const isLetterToNumber = exerciseType === ExerciseType.LETTER_TO_NUMBER;

  return (
    <div className={styles.startScreen}>
      <div className={styles.playMode}>
        <h3>{t.startScreen.gameMode}:</h3>
        <div
          className={`${styles.toggleButton} ${styles.toggleButtonLeft} ${
            isNumberToLetter ? `${styles.activeButton}` : ""
          }`}
          onClick={() =>
            context.settings.setExerciseType(ExerciseType.NUMBER_TO_LETTER)
          }
        >
          <div
            className={`${styles.toggleButtonIcon} ${
              isNumberToLetter
                ? `${styles.toggleButtonIconLetterToNumber}`
                : `${styles.toggleButtonIconLetterToNumberInactive}`
            }`}
          ></div>
          <div className={styles.toggleButtonCaption}>
            {t.global.numberToLetter}
          </div>
        </div>
        <div
          className={`${styles.toggleButton} ${styles.toggleButtonRight} ${
            isLetterToNumber ? `${styles.activeButton}` : ""
          }`}
          onClick={() =>
            context.settings.setExerciseType(ExerciseType.LETTER_TO_NUMBER)
          }
        >
          <div className={styles.toggleButtonCaption}>
            {t.global.letterToNumber}
          </div>
          <div
            className={`${styles.toggleButtonIcon} ${
              isLetterToNumber
                ? `${styles.toggleButtonIconNumberToLetter}`
                : `${styles.toggleButtonIconNumberToLetterInactive}`
            }`}
          ></div>
        </div>
        <div className={styles.startButton} onClick={props.onPlay}>
          <Icon icon={MaterialIcons.PlayCircle}></Icon>
          <div>{t.startScreen.startGame}</div>
        </div>
      </div>
      <Statistics trainingProgram={props.trainingProgram} />
    </div>
  );
};
