import { ExerciseType } from "../components/exercise/ExerciseType";
import { LetterTrainingProgramInitializer } from "../services/trainingProgramInitializer/LetterTrainingProgramInitializer";
import { NumberTrainingProgramInitializer } from "../services/trainingProgramInitializer/NumberTrainingProgramInitializer";
import { ITrainingProgramInfo } from "./ITrainingProgramInfo";
import { ITrainingProgram } from "./model/ITrainingProgram";

class TrainingProgramInfoDefault implements ITrainingProgramInfo {
  get(exerciseType: ExerciseType): ITrainingProgram {
    switch (exerciseType) {
      case ExerciseType.LETTER_TO_NUMBER: {
        return new LetterTrainingProgramInitializer().initialize();
      }
      case ExerciseType.NUMBER_TO_LETTER: {
        return new NumberTrainingProgramInitializer().initialize();
      }
    }
  }
}

export const TrainingProgramInfo = new TrainingProgramInfoDefault();
