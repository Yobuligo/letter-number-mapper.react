import { ITrainingProgram } from "./ITrainingProgram";
import { ITrainingProgramInfo } from "./ITrainingProgramInfo";

export class TrainingProgramInfo implements ITrainingProgramInfo {
  constructor(private trainingProgram: ITrainingProgram) {}

  public get probabilityWeightSum(): number {
    throw new Error();
  }
}
