import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { ExerciseType } from "../exercise/ExerciseType";
import Setting from "./Setting";

const ResetProgressSettings: React.FC = () => {
  const context = useContext(AppContext);
  const onReset = () => {
    const text =
      context.settings.storedParameters.exerciseType ===
      ExerciseType.LETTER_TO_NUMBER
        ? "letter to number"
        : "number to letter";

    const needsReset = window.confirm(
      `Do you really want to reset your progress from '${text}'?`
    );

    if (needsReset) {
      context.settings.onResetProgress();
    }
  };
  return (
    <Setting title="Reset Progress">
      <button onClick={onReset}>Reset</button>
    </Setting>
  );
};

export default ResetProgressSettings;
