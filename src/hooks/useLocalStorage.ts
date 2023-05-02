import { useEffect, useState } from "react";
export const useLocalStorage = <T>(
  key: string,
  initialValue?: T
): [value: T | undefined, setValue: (value: T) => void] => {
  const [value, setValue] = useState<T>();

  useEffect(() => {
    if (initialValue) {
      updateValue(initialValue);
    } else {
      const item = localStorage.getItem(key);
      if (item) {
        setValue(JSON.parse(item));
      }
    }
  }, []);

  const updateValue = (value: T) => {
    setValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [value, updateValue];
};
