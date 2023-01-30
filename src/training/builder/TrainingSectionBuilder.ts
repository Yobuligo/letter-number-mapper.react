import { ProbabilityWeight } from "../../Types/Types";
import { ITrainingSection } from "../model/ITrainingSection";
import { ITrainingSymbol } from "../model/ITrainingSymbol";
import { TrainingSection } from "../model/TrainingSection";
import { ITrainingSectionBuilder } from "./ITrainingSectionBuilder";

export class TrainingSectionBuilder implements ITrainingSectionBuilder {
  private answersTillProgression: number = 3;
  private trainingSymbols: ITrainingSymbol[] = [];

  constructor(private probabilityWeight: ProbabilityWeight) {}

  addTrainingSymbol(trainingSymbol: ITrainingSymbol): ITrainingSectionBuilder {
    this.trainingSymbols.push(trainingSymbol);
    return this;
  }

  setAnswersTillProgression(
    answersTillProgression: number
  ): ITrainingSectionBuilder {
    this.answersTillProgression = answersTillProgression;
    return this;
  }

  build(): ITrainingSection {
    const trainingSection = new TrainingSection(
      this.probabilityWeight,
      this.answersTillProgression,
      this.trainingSymbols
    );
    this.trainingSymbols.forEach((trainingSymbol) => {
      trainingSymbol.trainingSection = trainingSection;
    });
    return trainingSection;
  }
}
