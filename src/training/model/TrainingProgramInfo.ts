import { ITrainingProgram } from "./ITrainingProgram";
import { ITrainingProgramInfo } from "./ITrainingProgramInfo";

export class TrainingProgramInfo implements ITrainingProgramInfo {
  constructor(private trainingProgram: ITrainingProgram) {}

  public get probabilityWeightSum(): number {
    let probabilityWeight: number = 0;
    this.trainingProgram.trainingSections.forEach((trainingSection) => {
      probabilityWeight = probabilityWeight + trainingSection.probabilityWeight;
    });
    return probabilityWeight;
  }
}
