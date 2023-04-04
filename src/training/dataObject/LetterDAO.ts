import { DataAccessObject } from "../../core/DataAccessObject";
import { ITrainingSymbolDO } from "../model/ITrainingSymbolDO";

export const LetterDAO = new DataAccessObject<ITrainingSymbolDO>(
  localStorage,
  "letter-symbols"
);
