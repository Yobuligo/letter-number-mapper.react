import { ITrainingSymbol } from "./ITrainingSymbol";
import { ITrainingSymbolShifter } from "./ITrainingSymbolShifter";

export class TrainingSymbolShifter implements ITrainingSymbolShifter {
  shiftUp(trainingSymbol: ITrainingSymbol): void {
    if (
      trainingSymbol.trainingSection.follower !== undefined &&
      trainingSymbol.numberSuccessfulAnswers >
        trainingSymbol.trainingSection.answersTillProgression
    ) {
      trainingSymbol.trainingSection = trainingSymbol.trainingSection.follower;
    }
  }

  shiftDown(trainingSymbol: ITrainingSymbol): void {
    if (
      trainingSymbol.trainingSection.predecessor !== undefined &&
      trainingSymbol.numberSuccessfulAnswers ===
        trainingSymbol.trainingSection.predecessor.answersTillProgression
    ) {
      trainingSymbol.trainingSection =
        trainingSymbol.trainingSection.predecessor;
    }
  }
}
