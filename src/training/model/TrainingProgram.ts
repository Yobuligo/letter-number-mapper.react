import { ITrainingExercise } from "./ITrainingExercise";
import { ITrainingProgram } from "./ITrainingProgram";
import { ITrainingSection } from "./ITrainingSection";

export class TrainingProgram implements ITrainingProgram {
  constructor(public trainingSections: ITrainingSection[]) {}

  nextTrainingExercise(): ITrainingExercise {
    throw new Error("Method not implemented.");
  }
}
