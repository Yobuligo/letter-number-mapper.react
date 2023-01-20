import { useState } from "react";
import { ExerciseType } from "../exercise/ExerciseType";
import styles from "./Settings.module.css";

const Settings: React.FC = () => {
  const [exerciseType, setExerciseType] = useState(
    ExerciseType.LETTER_TO_NUMBER
  );

  const switchExerciseType = () => {
    if (exerciseType === ExerciseType.LETTER_TO_NUMBER) {
      setExerciseType(ExerciseType.NUMBER_TO_LETTER);
    } else {
      setExerciseType(ExerciseType.LETTER_TO_NUMBER);
    }
  };

  const onSwitchExerciseType = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      switchExerciseType();
    }
  };
  return (
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
              checked={
                exerciseType === ExerciseType.LETTER_TO_NUMBER ? true : false
              }
              onChange={onSwitchExerciseType}
            />
          </div>
          <div>
            <label htmlFor="numberToLetter">Number to letter</label>
            <input
              id="numberToLetter"
              name="exerciseType"
              type="radio"
              value=""
              checked={
                exerciseType === ExerciseType.NUMBER_TO_LETTER ? true : false
              }
              onChange={onSwitchExerciseType}
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Settings;
