import * as translations from "../data/texts";
import { useLanguage } from "./useLanguage";

export const useTranslation = () => {
  const [language, setLanguage] = useLanguage();

  const interpolation = (text: string, placeholders: any): string => {
    let newText = text;
    for (const placeholder in placeholders) {
      const placeholderText = placeholders[placeholder];
      const searchString = `{{${placeholder}}}`;
      newText = newText.replaceAll(searchString, placeholderText);
    }
    return newText;
  };

  switch (language) {
    case "de": {
      return { t: translations["de"], i: interpolation, language, setLanguage };
    }
    default: {
      return { t: translations.en, i: interpolation, language, setLanguage };
    }
  }
};
