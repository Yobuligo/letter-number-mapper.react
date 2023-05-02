import { useMemo } from "react";

export const useCSSColor = (colorVariableName: string) => {
  const primaryColor = useMemo(
    () =>
      getComputedStyle(document.documentElement).getPropertyValue(
        colorVariableName
      ),
    []
  );
  return primaryColor;
};
