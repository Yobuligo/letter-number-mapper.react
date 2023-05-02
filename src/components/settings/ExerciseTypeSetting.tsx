import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { useTranslation } from "../../hooks/useTranslation";
import { ExerciseType } from "../exercise/ExerciseType";
import Setting from "./Setting";

const ExerciseTypeSetting: React.FC = () => {
  const { t } = useTranslation();
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
    <Setting title={t.settings.exerciseType}>
      <div>
        <input
          id="letterToNumber"
          name="exerciseType"
          type="radio"
          checked={isChecked(ExerciseType.LETTER_TO_NUMBER)}
          onChange={onSwitchExerciseTypeHandler}
        />
        <label htmlFor="letterToNumber">{t.global.letterToNumber}</label>
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
        <label htmlFor="numberToLetter">{t.global.numberToLetter}</label>
      </div>
    </Setting>
  );
};

export default ExerciseTypeSetting;
