import { repeat } from "../core/repeat";
import { ITrainingProgramBuilder } from "../training/builder/ITrainingProgramBuilder";
import { ITrainingProgramInitializer } from "../training/builder/ITrainingProgramInitializer";
import { TrainingProgramBuilder } from "../training/builder/TrainingProgramBuilder";
import { ITrainingProgram } from "../training/model/ITrainingProgram";

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
