import { ITrainingSymbol } from "./ITrainingSymbol";

export interface ITrainingSection {
  readonly probability: number;
  readonly answersTillProgression: number;
  addTrainingSymbol(trainingSymbol: ITrainingSymbol): void;
  removeTrainingSymbol(trainingSymbol: ITrainingSymbol): void;
  findAll(): ITrainingSymbol[];
}
