import React, { useContext, useEffect, useMemo, useState } from "react";
import "./App.css";
import { AppContext, StoredParameters, STORED_PARAMETERS } from "./AppContext";
import { ExerciseType } from "./components/exercise/ExerciseType";
import { SolutionStatus } from "./components/exercise/SolutionStatus";
import { KeyboardType } from "./components/keyboard/KeyboardType";
import { Main } from "./components/main/Main";
import { FeedbackTime } from "./components/settings/FeedbackTime";
import { useDebounce } from "./hooks/useDebounce";
import { useSolutionStatus } from "./hooks/useSolutionStatus";
import { LetterToNumberSymbolMapper } from "./services/symbolMapper/LetterToNumberSymbolMapper";
import { NumberToLetterSymbolMapper } from "./services/symbolMapper/NumberToLetterSymbolMapper";
import { LetterTrainingProgramInitializer } from "./services/trainingProgramInitializer/LetterTrainingProgramInitializer";
import { NumberTrainingProgramInitializer } from "./services/trainingProgramInitializer/NumberTrainingProgramInitializer";
import { LocalStore } from "./store/LocalStore";
import { ITrainingExercise } from "./training/model/ITrainingExercise";
import { ITrainingProgram } from "./training/model/ITrainingProgram";
import { Letters, Numbers } from "./Types/Types";

const App: React.FC = () => {
  const localStore = useMemo(() => {
    return new LocalStore();
  }, []);

  const context = useContext(AppContext);

  const initializeSettings = () => {
    const locallyStoredParameters =
      localStore.get<StoredParameters>(STORED_PARAMETERS);
    if (
      locallyStoredParameters === null ||
      locallyStoredParameters === undefined
    ) {
      return {
        exerciseType: ExerciseType.LETTER_TO_NUMBER,
        feedbackTime: FeedbackTime.MIDDLE,
      };
    } else {
      context.settings.feedbackTime = locallyStoredParameters.feedbackTime;
      return locallyStoredParameters;
    }
  };

  const [settings, setSettings] = useState<StoredParameters>(
    initializeSettings()
  );

  const getTrainingProgramByExerciseType = (
    exerciseType: ExerciseType
  ): ITrainingProgram => {
    switch (exerciseType) {
      case ExerciseType.LETTER_TO_NUMBER: {
        return new LetterTrainingProgramInitializer().initialize();
      }
      case ExerciseType.NUMBER_TO_LETTER: {
        return new NumberTrainingProgramInitializer().initialize();
      }
    }
  };

  const [trainingProgram, setTrainingProgram] = useState<ITrainingProgram>(
    getTrainingProgramByExerciseType(settings.exerciseType)
  );

  const [trainingExercise, setTrainingExercise] = useState<ITrainingExercise>(
    trainingProgram.nextTrainingExercise()
  );

  useEffect(() => {
    localStore.save(STORED_PARAMETERS, settings);
  }, [localStore, settings]);

  const getKeyboardTypeByExerciseType = (exerciseType: ExerciseType) => {
    if (exerciseType === ExerciseType.LETTER_TO_NUMBER) {
      return KeyboardType.NUMBER;
    } else {
      return KeyboardType.LETTER;
    }
  };

  const getSymbolMapperByExerciseType = (exerciseType: ExerciseType) => {
    if (exerciseType === ExerciseType.LETTER_TO_NUMBER) {
      return NumberToLetterSymbolMapper;
    } else {
      return LetterToNumberSymbolMapper;
    }
  };

  const [symbolMapper, setSymbolMapper] = useState(
    getSymbolMapperByExerciseType(settings.exerciseType)
  );

  const readTrainingSymbol = (): string => {
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
  };

  const [symbol, setSymbol] = useState(readTrainingSymbol());

  const updateSymbolMapper = (exerciseType: ExerciseType) => {
    setSymbolMapper(getSymbolMapperByExerciseType(exerciseType));
  };

  // register on key pressed event (to handle each key)
  useEffect(() => {
    document.addEventListener("keydown", onKeyPressed, true);
    return () => {
      document.removeEventListener("keydown", onKeyPressed, true);
    };
  }, []);

  const getDebounceTimeInMillis = (): number => {
    if (settings.exerciseType === ExerciseType.LETTER_TO_NUMBER) {
      return 300;
    } else {
      return 0;
    }
  };

  const addKey = useDebounce(getDebounceTimeInMillis(), (debouncedValue) => {
    console.log(`Solution provided: ${debouncedValue}`);
    onExerciseSolutionProvided(debouncedValue);
  });

  const onKeyPressed = (keyboardEvent: KeyboardEvent) => {
    const uppercaseSymbol = keyboardEvent.key.toUpperCase();
    console.log(`The key ${uppercaseSymbol} was pressed`);
    //filter out/ignore all other keys but the letters/numbers
    if (
      !Letters.includes(uppercaseSymbol) &&
      !Numbers.includes(uppercaseSymbol) &&
      uppercaseSymbol !== "0"
    ) {
      return true;
    }
    addKey(uppercaseSymbol);
  };

  useEffect(() => {
    setTrainingExercise(trainingProgram?.nextTrainingExercise());
  }, [trainingProgram]);

  useEffect(() => {
    setSymbol(trainingExercise?.trainingSymbol.symbol!);
  }, [trainingExercise]);

  const { solutionStatus, setSolutionStatus } = useSolutionStatus(() =>
    setTrainingExercise(trainingProgram?.nextTrainingExercise())
  );

  const onSetExerciseTypeHandler = (exerciseType: ExerciseType) => {
    setTrainingProgram(getTrainingProgramByExerciseType(exerciseType));
    console.log(`ExerciseType changed to ${ExerciseType[exerciseType]}`);
    updateSymbolMapper(exerciseType);
    setSettings((previousSettings) => {
      return { ...previousSettings, exerciseType: exerciseType };
    });
  };

  const onSetFeedbackTimeHandler = (feedbackTime: FeedbackTime) => {
    setSettings((previousSettings) => {
      const settings = { ...previousSettings, feedbackTime: feedbackTime };
      return settings;
    });
  };

  const onExerciseSolutionProvided = (selectedSymbol: string) => {
    const mappedSelectedSymbol = symbolMapper.map(selectedSymbol);
    if (mappedSelectedSymbol === symbol) {
      console.log("Correct!");
      trainingExercise?.succeeded();
      setSolutionStatus(SolutionStatus.SUCCESSFUL);
    } else {
      trainingExercise?.failed();
      setSolutionStatus(SolutionStatus.FAILED);
      console.log(
        `Wrong solution (${mappedSelectedSymbol}) provided, try again`
      );
    }
  };

  return (
    <>
      <AppContext.Provider
        value={{
          settings: {
            storedParameters: {
              exerciseType: settings.exerciseType,
              feedbackTime: settings.feedbackTime,
            },
            setExerciseType: onSetExerciseTypeHandler,
            setFeedbackTime: onSetFeedbackTimeHandler,
            keyboardType: getKeyboardTypeByExerciseType(settings.exerciseType),
            feedbackTime: FeedbackTime.MIDDLE,
          },
          exercise: {
            symbol: symbol,
            provideExerciseSolution: onExerciseSolutionProvided,
            solutionStatus: solutionStatus,
          },
        }}
      >
        <Main />
      </AppContext.Provider>
    </>
  );
};

export default App;
