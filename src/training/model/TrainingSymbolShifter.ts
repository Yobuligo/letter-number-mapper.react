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
      console.log(
        `Symbol ${trainingSymbol.symbol} was shifted up to ${trainingSymbol.trainingSection.id}. training section.`
      );
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
      console.log(
        `Symbol ${trainingSymbol.symbol} was shifted down to ${trainingSymbol.trainingSection.id}. training section.`
      );
    }
  }
}
