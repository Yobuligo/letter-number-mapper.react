import { ExerciseType } from "../../components/exercise/ExerciseType";
import { TrainingProgramFactory } from "../TrainingProgramFactory";
import { ITrainingProgram } from "./ITrainingProgram";
import { ITrainingProgramRepo } from "./ITrainingProgramRepo";

class TrainingProgramRepoDefault implements ITrainingProgramRepo {
  private cache: Map<ExerciseType, ITrainingProgram> = new Map();

  fetch(exerciseType: ExerciseType): ITrainingProgram {
    return this.cache.get(exerciseType) ?? this.createAndReturn(exerciseType);
  }
  reset(): void {
    this.cache.clear();
  }

  private createAndReturn(exerciseType: ExerciseType): ITrainingProgram {
    const trainingProgram = TrainingProgramFactory.create(exerciseType);
    this.cache.set(exerciseType, trainingProgram);
    return trainingProgram;
  }
}

export const TrainingProgramRepo = new TrainingProgramRepoDefault();
