/* eslint-disable @typescript-eslint/no-unused-vars */
import { IDataObject } from "../../core/IDataObject";
import { ITrainingSymbol } from "./ITrainingSymbol";

/**
 * An implementation of this interface represents a data object,
 * which is responsible for persisting data of {@link ITrainingSymbol}
 *
 */
export interface ITrainingSymbolDO extends IDataObject {
  symbol: string;
  numberSuccessfulAnswers: number;
}
