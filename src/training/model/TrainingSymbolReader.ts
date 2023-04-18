import { ITrainingExercise } from "./ITrainingExercise";
import { ITrainingSymbolReader } from "./ITrainingSymbolReader";

class TrainingSymbolReaderDefault implements ITrainingSymbolReader {
  get(trainingExercise: ITrainingExercise): string {
    if (trainingExercise === undefined) {
      throw new Error(
        `Error reading training symbol. The training exercise is undefined.`
      );
    }

    if (trainingExercise.trainingSymbol === undefined) {
      throw new Error(
        `Error reading training symbol. The training symbol of the training exercise is undefined.`
      );
    }

    if (trainingExercise.trainingSymbol.symbol === undefined) {
      throw new Error(
        `Error reading training symbol. The symbol of the training symbol instance is undefined.`
      );
    }

    return trainingExercise.trainingSymbol.symbol;
  }
}

export const TrainingSymbolReader = new TrainingSymbolReaderDefault();
