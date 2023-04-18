import { ExerciseType } from "../components/exercise/ExerciseType";
import { LetterTrainingProgramInitializer } from "../services/trainingProgramInitializer/LetterTrainingProgramInitializer";
import { NumberTrainingProgramInitializer } from "../services/trainingProgramInitializer/NumberTrainingProgramInitializer";
import { ITrainingProgramInfo } from "./ITrainingProgramFactory";
import { ITrainingProgram } from "./model/ITrainingProgram";

class TrainingProgramFactoryDefault implements ITrainingProgramInfo {
  create(exerciseType: ExerciseType): ITrainingProgram {
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

export const TrainingProgramFactory = new TrainingProgramFactoryDefault();
