import { ITrainingSymbol } from "./ITrainingSymbol";

/**
 * An implementation of this interface represents a ITrainingSection which contains of ITrainingSymbols.
 * A section represents a learning progress of the ITrainingSymbols.
 * In case the learning progress increases by solving the ITrainingSymbols exercises, the ITrainingSymbol is moved to the next higher ITrainingSection.
 * 
 * How to reflect the progress level of a section?
 * The sections have a specific order (1, 2, 3, ...). The last section contains symbols which are known best. The first sections contain symbols which are more or less unknown.
 * So a symbol of the last section (4) is added only once to a list. Symbols of section 3 are added twice. Symbols of section 2 are added three times and symbols of section 1 are added four times.
 * At the end a symbol is picked from that list.
 */
export interface ITrainingSection {
  readonly answersTillProgression: number;
  id: number;
  follower: ITrainingSection | undefined;
  predecessor: ITrainingSection | undefined;
  addTrainingSymbol(trainingSymbol: ITrainingSymbol): void;
  countTrainingSymbols(): number;
  findAllTrainingSymbols(): ITrainingSymbol[];
  hasTrainingSymbols(): boolean;
  hasNotTrainingSymbols(): boolean;
  removeTrainingSymbol(trainingSymbol: ITrainingSymbol): void;
  trainingSymbolAt(index: number): ITrainingSymbol;
}
