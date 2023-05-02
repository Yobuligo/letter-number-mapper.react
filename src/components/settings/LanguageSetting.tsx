import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import { useLanguages } from "../../hooks/useLanguages";
import Setting from "./Setting";

const LanguageSetting: React.FC = () => {
  const languages = useLanguages();
  const [language, setLanguage] = useState("de");

  const onLanguageChange = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    newLanguage: any
  ) => setLanguage(newLanguage);
  return (
    <Setting title="Language">
      <ToggleButtonGroup value={language} exclusive onChange={onLanguageChange}>
        <ToggleButton value="de">Deutsch</ToggleButton>
        <ToggleButton value="en">English</ToggleButton>
      </ToggleButtonGroup>
    </Setting>
  );
};

export default LanguageSetting;
