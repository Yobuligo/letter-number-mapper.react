import { setEmitFlags } from "typescript";
import { StoredParameters, STORED_PARAMETERS } from "../AppContext";

export class ParameterStore {
  save = (storedParameters: StoredParameters) => {
    localStorage.setItem(STORED_PARAMETERS, JSON.stringify(storedParameters));
  };
  get = () => {
    const storedParameters = localStorage.getItem(STORED_PARAMETERS);
    if (storedParameters === "undefined" || storedParameters === null) {
      return null;
    } else {
      return JSON.parse(storedParameters);
    }
  };
}
