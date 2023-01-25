import { ITrainingExercise } from "./ITrainingExercise";
import { ITrainingProgram } from "./ITrainingProgram";
import { ITrainingProgramInfo } from "./ITrainingProgramInfo";
import { ITrainingSection } from "./ITrainingSection";
import { TrainingExerciseFactory } from "./TrainingExerciseFactory";
import { TrainingProgramInfo } from "./TrainingProgramInfo";
import { TrainingSymbolPicker } from "./TrainingSymbolPicker";

export class TrainingProgram implements ITrainingProgram {
  private trainingSymbolPicker = new TrainingSymbolPicker(this);
  readonly trainingProgramInfo: ITrainingProgramInfo = new TrainingProgramInfo(
    this
  );

  constructor(public trainingSections: ITrainingSection[]) {}

  nextTrainingExercise(): ITrainingExercise {
    return TrainingExerciseFactory.create(this.trainingSymbolPicker.next());
  }
}
