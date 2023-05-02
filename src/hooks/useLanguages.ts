import { useMemo } from "react";
import { IPair } from "../core/IPair";
import * as languagesJSON from "../data/texts/languages.json";

/**
 * This hook is responsible for loading all available languages key-value pairs.
 */
export const useLanguages = (): IPair<string, string>[] => {
  return useMemo(() => {
    const languages: IPair<string, string>[] = [];
    for (const key in languagesJSON) {
      if (key === "default") {
        continue;
      }
      languages.push({ key, value: (languagesJSON as any)[key] });
    }
    return languages;
  }, []);
};
