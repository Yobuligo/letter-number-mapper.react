import { useLocalStorage } from "./useLocalStorage";
/**
 * This hook is responsible for loading and setting the users language and to provide a fallback language if required.
 */
export const useLanguage = (): [
  language: string,
  setLanguage: (language: string) => void
] => {
  const [language, setLanguage] = useLocalStorage<string>("language", "en");
  return [language!, setLanguage];
};
