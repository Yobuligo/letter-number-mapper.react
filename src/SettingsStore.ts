import { setEmitFlags } from "typescript";
import { StoredSettings, STORED_SETTINGS } from "./AppContext";

export class SettingsStore {
  save = (settings: StoredSettings) => {
    localStorage.setItem(STORED_SETTINGS, JSON.stringify(settings));
  };
  get = () => {
    const settings = localStorage.getItem(STORED_SETTINGS);
    if (settings === 'undefined' || settings === null) {
      return null;
    } else {
      return JSON.parse(settings);
    }
  };
}
