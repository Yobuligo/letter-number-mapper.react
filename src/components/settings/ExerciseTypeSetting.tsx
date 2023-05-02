import { useContext, useMemo } from "react";
import { AppContext } from "../../AppContext";
import { ExerciseType } from "../exercise/ExerciseType";
import Setting from "./Setting";
import { ToggleButton, ToggleButtonGroup, styled } from "@mui/material";
import { useCSSColor } from "../../hooks/useCSSColor";

const ExerciseTypeSetting: React.FC = () => {
  const context = useContext(AppContext);
  const primaryColor = useCSSColor("--primaryColor");
  const textColorOnPrimary = useCSSColor("--mainTextColorOnPrimary");

  const onSwitchExerciseTypeHandler = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    newExerciseType: any
  ) => {
    context.settings.setExerciseType(newExerciseType);
  };

  const CustomToggleButton = useMemo(
    () =>
      styled(ToggleButton)({
        "&.MuiToggleButton-root": {
          fontSize: "0.6rem",
          paddingTop: "0.2rem",
          paddingBottom: "0.2rem",
        },
        "&.Mui-selected, &.Mui-selected:hover": {
          color: textColorOnPrimary,
          backgroundColor: primaryColor,
        },
      }),
    [primaryColor, textColorOnPrimary]
  );

  return (
    <Setting title="Exercise Type">
      <ToggleButtonGroup
        value={context.settings.storedParameters.exerciseType}
        exclusive
        onChange={onSwitchExerciseTypeHandler}
      >
        <CustomToggleButton
          key={ExerciseType.LETTER_TO_NUMBER}
          value={ExerciseType.LETTER_TO_NUMBER}
        >
          Letter to number
        </CustomToggleButton>
        <CustomToggleButton
          key={ExerciseType.NUMBER_TO_LETTER}
          value={ExerciseType.NUMBER_TO_LETTER}
        >
          Number to letter
        </CustomToggleButton>
      </ToggleButtonGroup>
    </Setting>
  );
};

export default ExerciseTypeSetting;
