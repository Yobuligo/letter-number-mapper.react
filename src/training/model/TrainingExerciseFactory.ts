import { ITrainingExercise } from "./ITrainingExercise";
import { ITrainingExerciseFactory } from "./ITrainingExerciseFactory";
import { ITrainingSymbol } from "./ITrainingSymbol";
import { TrainingExercise } from "./TrainingExercise";

export class TrainingExerciseFactoryDefault
  implements ITrainingExerciseFactory
{
  create(trainingSymbol: ITrainingSymbol): ITrainingExercise {
    if (trainingSymbol === undefined) {
      throw new Error(
        `Error when creating training exercise. Training symbol is undefined.`
      );
    }
    return new TrainingExercise(trainingSymbol);
  }
}

export const TrainingExerciseFactory = new TrainingExerciseFactoryDefault();
