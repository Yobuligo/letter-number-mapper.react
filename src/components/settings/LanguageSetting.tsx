import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useLanguage } from "../../hooks/useLanguage";
import { useLanguages } from "../../hooks/useLanguages";
import Setting from "./Setting";

const LanguageSetting: React.FC = () => {
  const [language, setLanguage] = useLanguage();
  const languages = useLanguages();

  const toggleButtons = languages.map((language) => (
    <ToggleButton key={language.key} value={language.key}>
      {language.value}
    </ToggleButton>
  ));

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
