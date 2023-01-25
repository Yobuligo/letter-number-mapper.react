import { ITrainingSection } from "../model/ITrainingSection";
import { ITrainingSymbol } from "../model/ITrainingSymbol";

/**
 * An implementation of this interface is a builder that is responsible for building ITrainingSections by adding ITrainingSymbols and by customizing the ITrainingSection.
 */
export interface ITrainingSectionBuilder {
  addTrainingSymbol(trainingSymbol: ITrainingSymbol): ITrainingSectionBuilder;
  setAnswersTillProgression(
    answersTillProgression: number
  ): ITrainingSectionBuilder;
  build(): ITrainingSection;
}
