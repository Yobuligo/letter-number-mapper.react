import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { useTranslation } from "../../hooks/useTranslation";
import styles from "./Exercise.module.scss";
import { ExerciseType } from "./ExerciseType";

export const Exercise: React.FC<{
  symbol: string;
}> = (props) => {
  const { t } = useTranslation();
  const context = useContext(AppContext);
  return (
    <div className={styles.exercise}>
      <h4>
        {context.settings.storedParameters.exerciseType ===
        ExerciseType.LETTER_TO_NUMBER
          ? t.exercise.taskLetterToNumber
          : t.exercise.taskNumberToLetter}
      </h4>
      <h1>{props.symbol}</h1>
      <h4>{t.exercise.alphabet}?</h4>
    </div>
  );
};
