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

  constructor(public trainingSections: ITrainingSection[]) {
    this.addTrainingSectionRelations();
  }

  nextTrainingExercise(): ITrainingExercise {
    return TrainingExerciseFactory.create(this.trainingSymbolPicker.next());
  }

  private addTrainingSectionRelations() {
    this.addPredecessorTrainingSectionRelation();
    this.addFollowerTrainingSectionRelation();
  }

  private addPredecessorTrainingSectionRelation() {
    for (let i = 0; i < this.trainingSections.length; i++) {
      if (i > 0) {
        const predecessorIndex = i - 1;
        this.trainingSections[i].predecessor =
          this.trainingSections[predecessorIndex];
      }
    }
  }

  private addFollowerTrainingSectionRelation() {
    for (let i = 0; i < this.trainingSections.length; i++) {
      if (i < this.trainingSections.length) {
        const followerIndex = i + 1;
        this.trainingSections[i].follower =
          this.trainingSections[followerIndex];
      }
    }
  }
}
