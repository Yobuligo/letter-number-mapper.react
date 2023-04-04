import { ITrainingProgram } from "../model/ITrainingProgram";
import { ITrainingSection } from "../model/ITrainingSection";
import { ITrainingSymbol } from "../model/ITrainingSymbol";
import { TrainingProgram } from "./../model/TrainingProgram";
import { ITrainingProgramBuilder } from "./ITrainingProgramBuilder";
import { ITrainingSectionBuilder } from "./ITrainingSectionBuilder";
import { TrainingSectionBuilder } from "./TrainingSectionBuilder";

export class TrainingProgramBuilder implements ITrainingProgramBuilder {
  private trainingSections: ITrainingSection[] = [];

  addTrainingSection(
    trainingSection: ITrainingSection
  ): ITrainingProgramBuilder {
    this.trainingSections.push(trainingSection);
    return this;
  }

  createEmptyTrainingSection(): ITrainingProgramBuilder {
    const trainingSection = this.createTrainingSectionBuilder().build();
    this.addTrainingSection(trainingSection);
    return this;
  }

  createTrainingSection(
    creator: (
      trainingSectionBuilder: ITrainingSectionBuilder
    ) => ITrainingSection
  ): ITrainingProgramBuilder {
    const trainingSectionBuilder = this.createTrainingSectionBuilder();
    const trainingSection = creator(trainingSectionBuilder);
    this.addTrainingSection(trainingSection);
    return this;
  }

  insertTrainingSymbols(
    trainingSymbols: ITrainingSymbol[]
  ): ITrainingProgramBuilder {
    const lastTrainingSection =
      this.trainingSections[this.trainingSections.length - 1];
    trainingSymbols.forEach((trainingSymbol) => {
      for (const trainingSection of this.trainingSections) {
        if (
          trainingSection === lastTrainingSection ||
          trainingSymbol.numberSuccessfulAnswers <=
            trainingSection.answersTillProgression
        ) {
          trainingSection.addTrainingSymbol(trainingSymbol);
          trainingSymbol.trainingSection = trainingSection;
          break;
        }
      }
    });
    return this;
  }

  build(): ITrainingProgram {
    return new TrainingProgram(this.trainingSections);
  }

  private createTrainingSectionBuilder(): ITrainingSectionBuilder {
    return new TrainingSectionBuilder();
  }
}
