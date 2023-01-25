import { ITrainingProgramBuilder } from "../training/builder/ITrainingProgramBuilder";
import { ITrainingProgramInitializer } from "../training/builder/ITrainingProgramInitializer";
import { TrainingProgramBuilder } from "../training/builder/TrainingProgramBuilder";
import { ITrainingProgram } from "../training/model/ITrainingProgram";
import { Letters } from "../Types/Types";

export class LetterTrainingProgramInitializer
  implements ITrainingProgramInitializer
{
  initialize(): ITrainingProgram {
    const trainingProgramBuilder: ITrainingProgramBuilder =
      new TrainingProgramBuilder();

    return trainingProgramBuilder
      .createTrainingSection(50, (trainingSectionBuilder) => {
        Letters.forEach((letter) => {
          trainingSectionBuilder.addTrainingSymbol({
            symbol: letter,
            numberSuccessfulAnswers: 0,
          });
        });
        return trainingSectionBuilder.build();
      })
      .createEmptyTrainingSection(30)
      .createEmptyTrainingSection(15)
      .createEmptyTrainingSection(5)
      .build();
  }
}
