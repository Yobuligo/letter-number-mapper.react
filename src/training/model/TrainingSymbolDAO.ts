import { DataAccessObject } from "../../core/dataObject/DataAccessObject";
import { ITrainingSymbolDO } from "./ITrainingSymbolDO";

export const TrainingSymbolDAO = new DataAccessObject<ITrainingSymbolDO>(
  localStorage,
  "training-symbols"
);
