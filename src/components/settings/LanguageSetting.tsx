import { ToggleButton, ToggleButtonGroup, styled } from "@mui/material";
import { useMemo } from "react";
import { useCSSColor } from "../../hooks/useCSSColor";
import { useLanguage } from "../../hooks/useLanguage";
import { useLanguages } from "../../hooks/useLanguages";
import { useTranslation } from "../../hooks/useTranslation";
import Setting from "./Setting";

const LanguageSetting: React.FC = () => {
  const [language, setLanguage] = useLanguage();
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
  ) => setLanguage(newLanguage);
  return (
    <Setting title={t.settings.language}>
      <ToggleButtonGroup value={language} exclusive onChange={onLanguageChange}>
        {toggleButtons}
      </ToggleButtonGroup>
    </Setting>
  );
};

export default LanguageSetting;
