export const style = (...styles: (string | undefined)[]): string => {
  const style = styles.filter((style) => style !== undefined).join(" ");
  return style;
};
