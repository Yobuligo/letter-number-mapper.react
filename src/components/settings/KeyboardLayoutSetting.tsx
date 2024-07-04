import { ToggleButton, ToggleButtonGroup, styled } from "@mui/material";
import { useContext, useMemo } from "react";
import { AppContext } from "../../AppContext";
import { useTranslation } from "../../hooks/useTranslation";
import colors from "../../styles/global/colors.module.scss";
import { KeyboardLayout } from "../keyboard/KeyboardLayout";
import Setting from "./Setting";

const KeyboardLayoutSetting: React.FC = () => {
  const context = useContext(AppContext);
  const { t } = useTranslation();
  const primaryColor = colors.primaryColor;
  const textColorOnPrimary = colors.mainTextColorOnPrimary;

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

  const toggleButtons = Object.keys(KeyboardLayout)
    .filter((element) => !(parseInt(element) >= 0))
    .map((layout) => (
      <CustomToggleButton key={layout} value={layout}>
        {layout}
      </CustomToggleButton>
    ));

  const onKeyboardLayoutChange = (
    _: React.MouseEvent<HTMLElement, MouseEvent>,
    newLayout: any
  ) => context.settings.setKeyboardLayout(newLayout);
  return (
    <Setting title={t.settings.keyboardLayout}>
      <ToggleButtonGroup
        value={context.settings.storedParameters.keyboardLayout}
        exclusive
        onChange={onKeyboardLayoutChange}
      >
        {toggleButtons}
      </ToggleButtonGroup>
    </Setting>
  );
};

export default KeyboardLayoutSetting;
