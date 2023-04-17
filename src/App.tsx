import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import { AppContext, STORED_PARAMETERS, StoredParameters } from "./AppContext";
import { Letters, Numbers } from "./Types/Types";
import { ExerciseType } from "./components/exercise/ExerciseType";
import { SolutionStatus } from "./components/exercise/SolutionStatus";
import { KeyboardType } from "./components/keyboard/KeyboardType";
import { Main } from "./components/main/Main";
import { FeedbackTime } from "./components/settings/FeedbackTime";
import { useDebounce } from "./hooks/useDebounce";
import { useSolutionStatus } from "./hooks/useSolutionStatus";
import { ISolvingTime } from "./model/ISolvingTime";
import { Stopwatch } from "./services/Stopwatch";
import { LetterToNumberSymbolMapper } from "./services/symbolMapper/LetterToNumberSymbolMapper";
import { NumberToLetterSymbolMapper } from "./services/symbolMapper/NumberToLetterSymbolMapper";
import { LetterTrainingProgramInitializer } from "./services/trainingProgramInitializer/LetterTrainingProgramInitializer";
import { NumberTrainingProgramInitializer } from "./services/trainingProgramInitializer/NumberTrainingProgramInitializer";
import { LocalStore } from "./store/LocalStore";
import { LetterDAO } from "./training/dataObject/LetterDAO";
import { NumberDAO } from "./training/dataObject/NumberDAO";
import { ITrainingExercise } from "./training/model/ITrainingExercise";
import { ITrainingProgram } from "./training/model/ITrainingProgram";

const App: React.FC = () => {
  const localStore = useMemo(() => {
    return new LocalStore();
  }, []);

  const initializeSettings = (): StoredParameters => {
    const locallyStoredParameters =
      localStore.get<StoredParameters>(STORED_PARAMETERS);
    if (
      locallyStoredParameters === null ||
      locallyStoredParameters === undefined
    ) {
      return {
        exerciseType: ExerciseType.LETTER_TO_NUMBER,
        feedbackTime: FeedbackTime.MIDDLE,
        showSolvingTimeList: true,
        showSolvingTime: true,
      };
    } else {
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

  const resetTrainingProgram = () => {
    setTrainingProgram(getTrainingProgramByExerciseType(settings.exerciseType));
  };

  const [trainingExercise, setTrainingExercise] = useState<ITrainingExercise>(
    trainingProgram.nextTrainingExercise()
  );

  const symbolDAO = useMemo(() => {
    if (settings.exerciseType === ExerciseType.LETTER_TO_NUMBER) {
      return LetterDAO;
    } else {
      return NumberDAO;
    }
  }, [settings.exerciseType]);

  const stopwatch = useMemo(() => {
    return new Stopwatch();
  }, []);

  const solvingTimes = useMemo<ISolvingTime[]>(() => {
    return [];
  }, [trainingProgram]);

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
    stopwatch.start();
  }, [stopwatch, trainingProgram]);

  useEffect(() => {
    setSymbol(trainingExercise?.trainingSymbol.symbol!);
  }, [trainingExercise]);

  const { solutionStatus, setSolutionStatus } = useSolutionStatus(() => {
    setTrainingExercise(trainingProgram?.nextTrainingExercise());
    stopwatch.start();
  });

  const onSetExerciseType = (exerciseType: ExerciseType) => {
    setTrainingProgram(getTrainingProgramByExerciseType(exerciseType));
    console.log(`ExerciseType changed to ${ExerciseType[exerciseType]}`);
    updateSymbolMapper(exerciseType);
    setSettings((previousSettings) => {
      return { ...previousSettings, exerciseType: exerciseType };
    });
  };

  const onSetFeedbackTime = (feedbackTime: FeedbackTime) => {
    setSettings((previousSettings) => {
      const settings: StoredParameters = {
        ...previousSettings,
        feedbackTime: feedbackTime,
      };
      return settings;
    });
  };

  const onSetShowSolvingTimeList = (showSolvingTimeList: boolean) => {
    setSettings((previousSettings) => {
      const settings: StoredParameters = {
        ...previousSettings,
        showSolvingTimeList: showSolvingTimeList,
      };
      return settings;
    });
  };

  const onSetShowSolvingTime = (showSolvingTime: boolean) => {
    setSettings((previousSettings) => {
      const settings: StoredParameters = {
        ...previousSettings,
        showSolvingTime: showSolvingTime,
      };
      return settings;
    });
  };

  const pushElapsedToSolvingTimes = (trainingExercise: ITrainingExercise) => {
    const trainingSymbol = trainingExercise.trainingSymbol;
    solvingTimes.splice(0, 0, {
      trainingSymbol: trainingSymbol,
      time: stopwatch.elapsed,
      numberSuccessfulAnswers: trainingSymbol.numberSuccessfulAnswers,
    });
    solvingTimes.splice(10, solvingTimes.length);
  };

  const onExerciseSolutionProvided = (selectedSymbol: string) => {
    // It must not be allowed to to solve the same exercise multiple times by e.g. fast clicking
    // So if an exercise is already solved, leave here
    if (trainingExercise.isSolved) {
      return;
    }
    const mappedSelectedSymbol = symbolMapper.map(selectedSymbol);
    if (mappedSelectedSymbol === symbol) {
      stopwatch.stop();
      console.log("Correct!");
      trainingExercise?.succeeded();
      pushElapsedToSolvingTimes(trainingExercise);
      setSolutionStatus(SolutionStatus.SUCCESSFUL);
    } else {
      trainingExercise?.failed();
      setSolutionStatus(SolutionStatus.FAILED);
      console.log(
        `Wrong solution (${mappedSelectedSymbol}) provided, try again`
      );
    }
  };

  const onResetProgress = () => {
    symbolDAO.deleteAll();
    resetTrainingProgram();
    console.log(`Progress reset`);
  };

  return (
    <>
      <AppContext.Provider
        value={{
          settings: {
            storedParameters: {
              exerciseType: settings.exerciseType,
              feedbackTime: settings.feedbackTime,
              showSolvingTimeList: settings.showSolvingTimeList,
              showSolvingTime: settings.showSolvingTime,
            },
            setExerciseType: onSetExerciseType,
            setFeedbackTime: onSetFeedbackTime,
            setShowSolvingTimeList: onSetShowSolvingTimeList,
            setShowSolvingTime: onSetShowSolvingTime,
            keyboardType: getKeyboardTypeByExerciseType(settings.exerciseType),
            onResetProgress: onResetProgress,
          },
          exercise: {
            symbol: symbol,
            provideExerciseSolution: onExerciseSolutionProvided,
            solutionStatus: solutionStatus,
            solvingTimes: solvingTimes,
          },
          stopwatch: stopwatch,
        }}
      >
        <Main />
      </AppContext.Provider>
    </>
  );
};

export default App;
