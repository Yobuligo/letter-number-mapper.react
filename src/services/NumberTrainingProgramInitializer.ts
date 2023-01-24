import { repeat } from "../core/repeat";
import { ITrainingProgram } from "../model/ITrainingProgram";
import { ITrainingProgramBuilder } from "./ITrainingProgramBuilder";
import { ITrainingProgramInitializer } from "./ITrainingProgramInitializer";
import { TrainingProgramBuilder } from "./TrainingProgramBuilder";

export class NumberTrainingProgramInitializer
  implements ITrainingProgramInitializer
{
  initialize(): ITrainingProgram {
    const trainingProgramBuilder: ITrainingProgramBuilder =
      new TrainingProgramBuilder();

    return trainingProgramBuilder
      .createTrainingSection(50, (trainingSectionBuilder) => {
        repeat(26, (index) => {
          trainingSectionBuilder.addTrainingSymbol({
            symbol: index.toString(),
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
