import * as translations from "../data/texts";
import { useLanguage } from "./useLanguage";

export const useTranslation = () => {
  const [language, setLanguage] = useLanguage();
  const translate = (key: string) => {
    const keys = key.split(".");
    return getTranslations(keys);
  };

  const getTranslations = (keys: string[]) => {
    return keys.reduce((obj, key) => {
      return obj[key];
    }, (translations as any)[language]);
  };

  return { t: translate, language, setLanguage };
};
