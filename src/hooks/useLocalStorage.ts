import { useCallback, useEffect, useState } from "react";

export const useLocalStorage = <T>(
  key: string,
  fallbackValue: T
): [value: T | undefined, setValue: (value: T) => void] => {
  const [value, setValue] = useState<T>(fallbackValue);

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item) {
      setValue(JSON.parse(item));
    } else {
      if (fallbackValue) {
        updateValue(fallbackValue);
      }
    }
  }, []);

  const updateValue = useCallback(
    (value: T) => {
      setValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key]
  );

  return [value, updateValue];
};
