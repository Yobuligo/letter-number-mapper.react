import { useCallback, useState } from "react";
import { readLocalStorage } from "../utils/readLocalStorage";
import { writeLocalStorage } from "../utils/writeLocalStorage";

export const useLocalStorage = <T>(
  key: string,
  fallbackValue: T
): [value: T, setValue: (value: T) => void] => {
  const [value, setValue] = useState<T>(
    readLocalStorage(key) ?? writeLocalStorage(key, fallbackValue)
  );

  const updateValue = useCallback(
    (value: T) => {
      setValue(value);
      writeLocalStorage(key, value);
    },
    [key]
  );

  return [value, updateValue];
};
