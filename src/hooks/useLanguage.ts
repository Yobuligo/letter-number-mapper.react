import { IValue } from "../Types/IValue";
import { useLocalStorage } from "./useLocalStorage";

/**
 * This hook is responsible for loading and setting the users language and to provide a fallback language if required.
 */
export const useLanguage = (): IValue<string> => {
  const [language, setLanguage] = useLocalStorage<string>("language", "en");
  return { value: language, setValue: setLanguage };
};
