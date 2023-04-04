import { IDataAccessObject } from "../../core/IDataAccessObject";
import { ITrainingProgramBuilder } from "../../training/builder/ITrainingProgramBuilder";
import { ITrainingProgramInitializer } from "../../training/builder/ITrainingProgramInitializer";
import { TrainingProgramBuilder } from "../../training/builder/TrainingProgramBuilder";
import { ITrainingProgram } from "../../training/model/ITrainingProgram";
import { ITrainingSymbol } from "../../training/model/ITrainingSymbol";
import { ITrainingSymbolDO } from "../../training/model/ITrainingSymbolDO";
import { TrainingSymbol } from "./../../training/model/TrainingSymbol";

export class TrainingProgramInitializer implements ITrainingProgramInitializer {
  constructor(
    private symbols: string[],
    private trainingSymbolDAO: IDataAccessObject<ITrainingSymbolDO>
  ) {}

  initialize(): ITrainingProgram {
    const trainingProgramBuilder: ITrainingProgramBuilder =
      new TrainingProgramBuilder();

    let trainingSymbols: ITrainingSymbol[];
    if (this.trainingSymbolDAO.isNotEmpty()) {
      trainingSymbols = this.createTrainingSymbolsFromDOs();
    } else {
      trainingSymbols = this.createTrainingSymbolsFromSymbols();
    }

    return trainingProgramBuilder
      .createTrainingSection((trainingSectionBuilder) => {
        trainingSectionBuilder.setAnswersTillProgression(3);
        return trainingSectionBuilder.build();
      })
      .createTrainingSection((trainingSectionBuilder) => {
        trainingSectionBuilder.setAnswersTillProgression(6);
        return trainingSectionBuilder.build();
      })
      .createTrainingSection((trainingSectionBuilder) => {
        trainingSectionBuilder.setAnswersTillProgression(9);
        return trainingSectionBuilder.build();
      })
      .createTrainingSection((trainingSectionBuilder) => {
        trainingSectionBuilder.setAnswersTillProgression(12);
        return trainingSectionBuilder.build();
      })
      .insertTrainingSymbols(trainingSymbols)
      .build();
  }

  private createTrainingSymbolsFromSymbols(): ITrainingSymbol[] {
    return this.symbols.map((symbol) => new TrainingSymbol(symbol));
  }

  private createTrainingSymbolsFromDOs(): ITrainingSymbol[] {
    return this.trainingSymbolDAO
      .findAll()
      .map(
        (trainingSymbolDO) =>
          new TrainingSymbol(
            trainingSymbolDO.symbol,
            trainingSymbolDO.numberSuccessfulAnswers
          )
      );
  }
}
