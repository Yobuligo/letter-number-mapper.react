import { ITrainingSection } from "./ITrainingSection";
import { ITrainingSymbolDO } from "./ITrainingSymbolDO";

/**
 * An implementation of this interface represents a ITrainingSymbol.
 * A ITrainingSymbol has to be learned (e.g. combination letter->number of the alphabet or reverse).
 */
export interface ITrainingSymbol extends ITrainingSymbolDO {
  trainingSection: ITrainingSection;
  failed(): void;
  succeed(): void;
}
