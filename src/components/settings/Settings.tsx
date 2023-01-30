import { useContext } from "react";
import { AppContext } from "../../AppContext";
import Card from "../core/card/Card";
import { ExerciseType } from "../exercise/ExerciseType";
import styles from "./Settings.module.css";

const Settings: React.FC = () => {
  const context = useContext(AppContext);

  const switchExerciseType = () => {
    if (
      context.settings.storedParameters.exerciseType ===
      ExerciseType.LETTER_TO_NUMBER
    ) {
      context.settings.setExerciseType(ExerciseType.NUMBER_TO_LETTER);
    } else {
      context.settings.setExerciseType(ExerciseType.LETTER_TO_NUMBER);
    }
  };

  const onSwitchExerciseTypeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.checked) {
      switchExerciseType();
    }
  };

  const isChecked = (exerciseType: ExerciseType) => {
    return context.settings.storedParameters.exerciseType === exerciseType
      ? true
      : false;
  };

  return (
    <Card>
      <section>
        <form>
          <h3>Exercise Type</h3>
          <div className={styles.settings}>
            <div>
              <label htmlFor="letterToNumber">Letter to number</label>
              <input
                id="letterToNumber"
                name="exerciseType"
                type="radio"
                checked={isChecked(ExerciseType.LETTER_TO_NUMBER)}
                onChange={onSwitchExerciseTypeHandler}
              />
            </div>
            <div>
              <label htmlFor="numberToLetter">Number to letter</label>
              <input
                id="numberToLetter"
                name="exerciseType"
                type="radio"
                value=""
                checked={isChecked(ExerciseType.NUMBER_TO_LETTER)}
                onChange={onSwitchExerciseTypeHandler}
              />
            </div>
          </div>
        </form>
      </section>
    </Card>
  );
};

export default Settings;
