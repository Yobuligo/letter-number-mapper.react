import { ITrainingSection } from "./../model/ITrainingSection";
import { ITrainingSymbol } from "./../model/ITrainingSymbol";

export interface ITrainingSectionBuilder {
  addTrainingSymbol(trainingSymbol: ITrainingSymbol): ITrainingSectionBuilder;
  setAnswersTillProgression(
    answersTillProgression: number
  ): ITrainingSectionBuilder;
  build(): ITrainingSection;
}
