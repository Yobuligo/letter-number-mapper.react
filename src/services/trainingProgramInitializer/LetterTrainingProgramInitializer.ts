import { ITrainingProgramInitializer } from "../../training/builder/ITrainingProgramInitializer";
import { LetterDAO } from "../../training/dataObject/LetterDAO";
import { ITrainingProgram } from "../../training/model/ITrainingProgram";
import { Letters } from "../../Types/Types";
import { TrainingProgramInitializer } from "./TrainingProgramInitializer";

export class LetterTrainingProgramInitializer
  implements ITrainingProgramInitializer
{
  initialize(): ITrainingProgram {
    const trainingProgramInitializer = new TrainingProgramInitializer(
      Letters,
      LetterDAO
    );
    return trainingProgramInitializer.initialize();
  }
}
