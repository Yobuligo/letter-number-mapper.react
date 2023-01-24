import { ITrainingExercise } from "./ITrainingExercise";
import { ITrainingProgram } from "./ITrainingProgram";
import { ITrainingSection } from "./ITrainingSection";
import { TrainingExerciseFactory } from "./TrainingExerciseFactory";
import { TrainingSymbolPicker } from "./TrainingSymbolPicker";

export class TrainingProgram implements ITrainingProgram {
  private trainingSymbolPicker = new TrainingSymbolPicker(this);

  constructor(public trainingSections: ITrainingSection[]) {}

  nextTrainingExercise(): ITrainingExercise {
    return TrainingExerciseFactory.create(this.trainingSymbolPicker.next());
  }
}
