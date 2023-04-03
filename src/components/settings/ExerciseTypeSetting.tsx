import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { ExerciseType } from "../exercise/ExerciseType";
import Setting from "./Setting";

const ExerciseTypeSetting: React.FC = () => {
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
    <Setting title="Exercise Type">
        <div>
          <input
            id="letterToNumber"
            name="exerciseType"
            type="radio"
            checked={isChecked(ExerciseType.LETTER_TO_NUMBER)}
            onChange={onSwitchExerciseTypeHandler}
          />
          <label htmlFor="letterToNumber">Letter to number</label>
        </div>
        <div>
          <input
            id="numberToLetter"
            name="exerciseType"
            type="radio"
            value=""
            checked={isChecked(ExerciseType.NUMBER_TO_LETTER)}
            onChange={onSwitchExerciseTypeHandler}
          />
          <label htmlFor="numberToLetter">Number to letter</label>
        </div>
    </Setting>
  );
};

export default ExerciseTypeSetting;
