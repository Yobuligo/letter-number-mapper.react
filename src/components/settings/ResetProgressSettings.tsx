import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { useTranslation } from "../../hooks/useTranslation";
import { ExerciseType } from "../exercise/ExerciseType";
import styles from "./ResetProgressSettings.module.css";
import Setting from "./Setting";

const ResetProgressSettings: React.FC = () => {
  const { t, i } = useTranslation();
  const context = useContext(AppContext);
  const onReset = () => {
    const text =
      context.settings.storedParameters.exerciseType ===
      ExerciseType.LETTER_TO_NUMBER
        ? t.global.letterToNumber
        : t.global.numberToLetter;

    const needsReset = window.confirm(
      i(t.settings.resetProgress.question, { text: text })
    );

    if (needsReset) {
      context.settings.onResetProgress();
    }
  };
  return (
    <Setting title={t.settings.resetProgress.title} className={styles.setting}>
      <button onClick={onReset}>Reset</button>
    </Setting>
  );
};

export default ResetProgressSettings;
