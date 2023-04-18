import { ITrainingExercise } from "./ITrainingExercise";
import { ITrainingProgram } from "./ITrainingProgram";
import { ITrainingSection } from "./ITrainingSection";
import { TrainingExerciseFactory } from "./TrainingExerciseFactory";
import { TrainingSymbolPicker } from "./TrainingSymbolPicker";
import { TrainingSymbolShifter } from "./TrainingSymbolShifter";

export class TrainingProgram implements ITrainingProgram {
  private _trainingExercise?: ITrainingExercise;
  private trainingSymbolPicker = new TrainingSymbolPicker(this);
  private trainingSymbolShifter = new TrainingSymbolShifter();

  constructor(public trainingSections: ITrainingSection[]) {
    this.addTrainingSectionRelations();
  }

  get trainingExercise(): ITrainingExercise {
    if (!this._trainingExercise) {
      this._trainingExercise = this.nextTrainingExercise();
    }
    return this._trainingExercise;
  }

  nextTrainingExercise(): ITrainingExercise {
    this._trainingExercise = TrainingExerciseFactory.create(
      this.trainingSymbolPicker.next()
    );
    this._trainingExercise.onFail((trainingExercise) => {
      this.trainingSymbolShifter.shiftDown(trainingExercise.trainingSymbol);
    });
    this._trainingExercise.onSucceed((trainingExercise) => {
      this.trainingSymbolShifter.shiftUp(trainingExercise.trainingSymbol);
    });
    return this._trainingExercise;
  }

  private addTrainingSectionRelations() {
    this.addPredecessorTrainingSectionRelation();
    this.addFollowerTrainingSectionRelation();
    this.setTrainingSectionId();
  }

  private setTrainingSectionId() {
    let id: number = 0;
    this.trainingSections.forEach((trainingSection) => {
      id++;
      trainingSection.id = id;
    });
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
