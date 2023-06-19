export const readLocalStorage = <T>(key: string): T | undefined => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }
  return undefined;
};
