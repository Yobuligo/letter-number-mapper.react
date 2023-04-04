import { DataAccessObject } from "../../core/DataAccessObject";
import { ITrainingSymbolDO } from "../model/ITrainingSymbolDO";

export const NumberDAO = new DataAccessObject<ITrainingSymbolDO>(
  localStorage,
  "number-symbols"
);
