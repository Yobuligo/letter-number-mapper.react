import * as languagesJSON from "../data/texts/languages.json";

interface ILanguage {
  key: string;
  title: string;
}

export const useLanguages = (): ILanguage[] => {
  const languages: ILanguage[] = [];
  for (const key in languagesJSON) {
    if (key === "default") {
      continue;
    }
    languages.push({ key, title: (languagesJSON as any)[key] });
  }
  return languages;
};
