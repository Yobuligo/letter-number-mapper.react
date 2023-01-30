export class LocalStore {
  save<T>(key: string, content: T) {
    localStorage.setItem(key, JSON.stringify(content));
  }
  get<T>(key: string): T | null {
    const content = localStorage.getItem(key);
    if (content === "undefined" || content === null) {
      return null;
    } else {
      return JSON.parse(content);
    }
  }
}
