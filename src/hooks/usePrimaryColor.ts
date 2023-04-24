import { useMemo } from "react";

export const usePrimaryColor = () => {
  const primaryColor = useMemo(
    () =>
      getComputedStyle(document.documentElement).getPropertyValue(
        "--primaryColor"
      ),
    []
  );
  return primaryColor;
};
