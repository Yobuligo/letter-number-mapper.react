export const writeLocalStorage = <T>(key: string, data: T): T => {
  const item = JSON.stringify(data);
  localStorage.setItem(key, item);
  return data;
};
