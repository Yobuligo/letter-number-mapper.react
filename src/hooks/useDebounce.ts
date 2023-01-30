import { useEffect, useState } from "react";

export const useDebounce = (
  timeInMillis: number,
  onDebounceCompletedHandler: (debouncedValue: string) => void
) => {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (debouncedValue !== "") {
        onDebounceCompletedHandler(debouncedValue);
        setDebouncedValue("");
      }
    }, timeInMillis);
    return () => clearTimeout(timeout);
  }, [debouncedValue, onDebounceCompletedHandler, timeInMillis]);

  const addKey = (newValue: string) => {
    setDebouncedValue((prev) => prev + newValue);
  };
  return addKey;
};
