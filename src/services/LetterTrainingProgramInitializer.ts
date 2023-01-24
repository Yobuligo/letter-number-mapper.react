import { ITrainingProgram } from "../model/ITrainingProgram";
import { Alphabet } from "../Types/Types";
import { ITrainingProgramBuilder } from "./ITrainingProgramBuilder";
import { ITrainingProgramInitializer } from "./ITrainingProgramInitializer";
import { TrainingProgramBuilder } from "./TrainingProgramBuilder";

export class LetterTrainingProgramInitializer
  implements ITrainingProgramInitializer
{
  initialize(): ITrainingProgram {
    const trainingProgramBuilder: ITrainingProgramBuilder =
      new TrainingProgramBuilder();

    return trainingProgramBuilder
      .createTrainingSection(50, (trainingSectionBuilder) => {
        Alphabet.forEach((letter) => {
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
