import { ITrainingExercise } from "./ITrainingExercise";
import { ITrainingExerciseFactory } from "./ITrainingExerciseFactory";
import { ITrainingSymbol } from "./ITrainingSymbol";
import { TrainingExercise } from "./TrainingExercise";

export class TrainingExerciseFactoryDefault
  implements ITrainingExerciseFactory
{
  create(trainingSymbol: ITrainingSymbol): ITrainingExercise {
    return new TrainingExercise(trainingSymbol);
  }
}

export const TrainingExerciseFactory = new TrainingExerciseFactoryDefault();
