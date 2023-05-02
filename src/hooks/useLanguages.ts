import * as languagesJSON from "../data/texts/languages.json";

interface ILanguage {
  key: string;
  title: string;
}

export const useLanguages = (): ILanguage[] => {
  return (languagesJSON as any)["default"];
};
