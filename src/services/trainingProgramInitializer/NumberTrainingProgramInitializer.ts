import { ITrainingProgramInitializer } from "../../training/builder/ITrainingProgramInitializer";
import { ITrainingProgram } from "../../training/model/ITrainingProgram";
import { Numbers } from "../../Types/Types";
import { TrainingProgramInitializer } from "./TrainingProgramInitializer";

export class NumberTrainingProgramInitializer
  implements ITrainingProgramInitializer
{
  initialize(): ITrainingProgram {
    const trainingProgramInitializer = new TrainingProgramInitializer(Numbers);
    return trainingProgramInitializer.initialize();
  }
}
