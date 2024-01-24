import { useContext } from "react";
import { AppContext } from "../AppContext";
import * as translations from "../data/texts";

export const useTranslation = () => {
  const context = useContext(AppContext);

  const interpolation = (text: string, placeholders: any): string => {
    let newText = text;
    for (const placeholder in placeholders) {
      const placeholderText = placeholders[placeholder];
      const searchString = `{{${placeholder}}}`;
      newText = newText.replaceAll(searchString, placeholderText);
    }
    return newText;
  };

  const language = context.settings.letterToNumber_language.value;
  const setLanguage = context.settings.letterToNumber_language.setValue;

  switch (context.settings.letterToNumber_language.value) {
    case "de": {
      return { t: translations["de"], i: interpolation, language, setLanguage };
    }
    default: {
      return { t: translations.en, i: interpolation, language, setLanguage };
    }
  }
};
