import { ITrainingSection } from "./ITrainingSection";

/**
 * An implementation of this interface represents a ITrainingSymbol.
 * A ITrainingSymbol has to be learned (e.g. combination letter->number of the alphabet or reverse).
 */
export interface ITrainingSymbol {
  readonly symbol: string;
  readonly numberSuccessfulAnswers: number;
  trainingSection: ITrainingSection;
  failed(): void;
  succeed(): void;
  registerOnFailed(
    eventHandler: (trainingSymbol: ITrainingSymbol) => void
  ): void;
  registerOnSucceed(
    eventHandler: (trainingSymbol: ITrainingSymbol) => void
  ): void;
}
