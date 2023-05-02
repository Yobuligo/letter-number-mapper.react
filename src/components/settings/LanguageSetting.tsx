import { ToggleButton, ToggleButtonGroup, styled } from "@mui/material";
import { useMemo, useState } from "react";
import { useLanguages } from "../../hooks/useLanguages";
import Setting from "./Setting";
import { useCSSColor } from "../../hooks/useCSSColor";

const LanguageSetting: React.FC = () => {
  const languages = useLanguages();
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

  const [language, setLanguage] = useState("de");

  const onLanguageChange = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    newLanguage: any
  ) => setLanguage(newLanguage);
  return (
    <Setting title="Language">
      <ToggleButtonGroup value={language} exclusive onChange={onLanguageChange}>
        {toggleButtons}
      </ToggleButtonGroup>
    </Setting>
  );
};

export default LanguageSetting;
