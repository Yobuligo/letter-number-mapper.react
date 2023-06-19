import { ToggleButton, ToggleButtonGroup, styled } from "@mui/material";
import { useContext, useMemo } from "react";
import { AppContext } from "../../AppContext";
import { useCSSColor } from "../../hooks/useCSSColor";
import { useLanguages } from "../../hooks/useLanguages";
import { useTranslation } from "../../hooks/useTranslation";
import Setting from "./Setting";

const LanguageSetting: React.FC = () => {
  const context = useContext(AppContext);
  const languages = useLanguages();
  const { t } = useTranslation();
  const primaryColor = useCSSColor("--primaryColor");
  const textColorOnPrimary = useCSSColor("--mainTextColorOnPrimary");

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

  const toggleButtons = languages.map((language) => (
    <CustomToggleButton key={language.key} value={language.key}>
      {language.value}
    </CustomToggleButton>
  ));

  const onLanguageChange = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    newLanguage: any
  ) => context.settings.language.setValue(newLanguage);
  return (
    <Setting title={t.settings.language}>
      <ToggleButtonGroup
        value={context.settings.language.value}
        exclusive
        onChange={onLanguageChange}
      >
        {toggleButtons}
      </ToggleButtonGroup>
    </Setting>
  );
};

export default LanguageSetting;
