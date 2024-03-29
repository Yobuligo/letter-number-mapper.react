import { STORED_PARAMETERS, StoredParameters } from "../AppContext";
import { ExerciseType } from "../components/exercise/ExerciseType";
import { KeyboardLayout } from "../components/keyboard/KeyboardLayout";
import { FeedbackTime } from "../components/settings/FeedbackTime";
import { LocalStore } from "../store/LocalStore";

export const initializeSettings = (
  localStore: LocalStore
): StoredParameters => {
  const locallyStoredParameters =
    localStore.get<StoredParameters>(STORED_PARAMETERS);
  if (
    locallyStoredParameters === null ||
    locallyStoredParameters === undefined
  ) {
    return {
      exerciseType: ExerciseType.LETTER_TO_NUMBER,
      feedbackTime: FeedbackTime.MIDDLE,
      keyboardLayout: KeyboardLayout.QWERTY,
      showSolvingTimeList: true,
      showSolvingTime: true,
    };
  } else {
    return locallyStoredParameters;
  }
};
