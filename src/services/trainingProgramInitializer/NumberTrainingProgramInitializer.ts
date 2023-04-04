import { ITrainingProgramInitializer } from "../../training/builder/ITrainingProgramInitializer";
import { NumberDAO } from "../../training/dataObject/NumberDAO";
import { ITrainingProgram } from "../../training/model/ITrainingProgram";
import { Numbers } from "../../Types/Types";
import { TrainingProgramInitializer } from "./TrainingProgramInitializer";

export class NumberTrainingProgramInitializer
  implements ITrainingProgramInitializer
{
  initialize(): ITrainingProgram {
    const trainingProgramInitializer = new TrainingProgramInitializer(
      Numbers,
      NumberDAO
    );
    return trainingProgramInitializer.initialize();
  }
}
