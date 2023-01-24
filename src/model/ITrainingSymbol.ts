/**
 * An implementation of this interface represents a ITrainingSymbol.
 * A ITrainingSymbol has to be learned (e.g. combination letter vs number in the alphabet).
 */
export interface ITrainingSymbol {
  readonly symbol: string;
  readonly numberSuccessfulAnswers: number;
}
