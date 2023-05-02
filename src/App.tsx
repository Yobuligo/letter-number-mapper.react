import React, { useEffect, useMemo, useState } from "react";
import { AppContext, STORED_PARAMETERS, StoredParameters } from "./AppContext";
import { Letters, Numbers } from "./Types/Types";
import { ExerciseType } from "./components/exercise/ExerciseType";
import { SolutionStatus } from "./components/exercise/SolutionStatus";
import { Main } from "./components/main/Main";
import { FeedbackTime } from "./components/settings/FeedbackTime";
import { initializeSettings } from "./context/SettingsInitializer";
import { useDebounce } from "./hooks/useDebounce";
import { useSolutionStatus } from "./hooks/useSolutionStatus";
import { ISolvingTime } from "./model/ISolvingTime";
import { Stopwatch } from "./services/Stopwatch";
import { KeyboardTypeInfo } from "./services/keyboardType/KeyboardTypeInfo";
import { SymbolMapperInfo } from "./services/symbolMapper/SymbolMapperInfo";
import { LocalStore } from "./store/LocalStore";
import { LetterDAO } from "./training/dataObject/LetterDAO";
import { NumberDAO } from "./training/dataObject/NumberDAO";
import { ITrainingExercise } from "./training/model/ITrainingExercise";
import { TrainingProgramRepo } from "./training/model/TrainingProgramRepo";
import { TrainingSymbolReader } from "./training/model/TrainingSymbolReader";
import { StartScreen } from "./components/startScreen/StartScreen";

const App: React.FC = () => {
  const localStore = useMemo(() => {
    return new LocalStore();
  }, []);

  const [showMain, setShowMain] = useState(false);

  const [settings, setSettings] = useState(initializeSettings(localStore));

  const [trainingProgram, setTrainingProgram] = useState(
    TrainingProgramRepo.fetch(settings.exerciseType)
  );

  const [trainingExercise, setTrainingExercise] = useState<ITrainingExercise>(
    trainingProgram.trainingExercise
  );

  const [pickedSymbols, setPickedSymbols] = useState(new Map<string, number>());
  const findPickedSymbolCount = (symbol: string) => {
    const reverseSymbol = SymbolMapperInfo.getReverse(
      settings.exerciseType
    ).map(symbol);
    return pickedSymbols.get(reverseSymbol) ?? 0;
  };

  const [devModeActive, setDevModeActive] = useState(false);

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

  const [solvingTimes, setSolvingTimes] = useState<ISolvingTime[]>([]);

  const [lastPracticedSymbol, setLastPracticedSymbol] = useState<string>();
  const onSetLastPracticedSymbol = (symbol: string) => {
    setLastPracticedSymbol(symbol);
  };

  useEffect(() => {
    localStore.save(STORED_PARAMETERS, settings);
  }, [localStore, settings]);

  const [symbol, setSymbol] = useState(
    TrainingSymbolReader.get(trainingExercise)
  );

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

  const onNewTrainingExercise = () => {
    const nextTrainingExercise = trainingProgram.nextTrainingExercise(
      lastPracticedSymbol ? [lastPracticedSymbol] : []
    );
    setPickedSymbols((previous) => {
      const newCount =
        (previous.get(nextTrainingExercise.trainingSymbol.symbol) ?? 0) + 1;
      previous.set(nextTrainingExercise.trainingSymbol.symbol, newCount);
      return new Map(previous);
    });
    setTrainingExercise(nextTrainingExercise);
    stopwatch.start();
  };

  useEffect(() => {
    onNewTrainingExercise();
  }, [stopwatch, trainingProgram]);

  useEffect(() => {
    setSymbol(trainingExercise?.trainingSymbol.symbol!);
  }, [trainingExercise]);

  const { solutionStatus, setSolutionStatus } = useSolutionStatus(() => {
    onNewTrainingExercise();
  });

  const onSetExerciseType = (exerciseType: ExerciseType) => {
    setTrainingProgram(TrainingProgramRepo.fetch(exerciseType));
    console.log(`ExerciseType changed to ${ExerciseType[exerciseType]}`);
    onResetSolvingTimes();
    setPickedSymbols(new Map());
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

  const pushElapsedToSolvingTimes = (
    trainingExercise: ITrainingExercise,
    selectedSymbol: string
  ) => {
    const trainingSymbol = trainingExercise.trainingSymbol;
    solvingTimes.splice(0, 0, {
      trainingSymbol: trainingSymbol,
      time: stopwatch.elapsed,
      numberSuccessfulAnswers: trainingSymbol.numberSuccessfulAnswers,
      solutionStatus: trainingExercise.solutionStatus,
      exerciseType: settings.exerciseType,
      selectedSymbol,
    });
    solvingTimes.splice(10, solvingTimes.length);
  };

  const onExerciseSolutionProvided = (selectedSymbol: string) => {
    // It must not be allowed to solve the same exercise multiple times by e.g. fast clicking
    // So if an exercise is already solved, leave here
    if (!trainingExercise) {
      throw new Error(
        `Error when updating solved exercise. Instance of training exercise must not be null.`
      );
    }
    if (trainingExercise.isSolved) {
      return;
    }
    const mappedSelectedSymbol = SymbolMapperInfo.getReverse(
      settings.exerciseType
    ).map(selectedSymbol);
    stopwatch.stop();
    if (mappedSelectedSymbol === symbol) {
      console.log("Correct!");
      trainingExercise.succeeded();
      pushElapsedToSolvingTimes(trainingExercise, selectedSymbol);
      setSolutionStatus(SolutionStatus.Successful);
      setLastPracticedSymbol(trainingExercise.trainingSymbol.symbol);
    } else {
      trainingExercise.failed();
      pushElapsedToSolvingTimes(trainingExercise, selectedSymbol);
      setSolutionStatus(SolutionStatus.Failed);
      setLastPracticedSymbol(trainingExercise.trainingSymbol.symbol);
      console.log(`Wrong solution (${mappedSelectedSymbol}) provided`);
    }
  };

  const onResetProgress = () => {
    symbolDAO.deleteAll();
    TrainingProgramRepo.reset();
    setTrainingProgram(TrainingProgramRepo.fetch(settings.exerciseType));
    onResetSolvingTimes();
    console.log(`Progress reset`);
  };

  const onResetSolvingTimes = () => {
    setSolvingTimes([]);
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
            keyboardType: KeyboardTypeInfo.get(settings.exerciseType),
            onResetProgress: onResetProgress,
          },
          exercise: {
            symbol: symbol,
            provideExerciseSolution: onExerciseSolutionProvided,
            solutionStatus: solutionStatus,
            solvingTimes: solvingTimes,
            resetSolvingTimes: onResetSolvingTimes,
          },
          devMode: {
            devModeActive: devModeActive,
            setDevModeActive: setDevModeActive,
            findPickedSymbolCount: findPickedSymbolCount,
          },
          stopwatch: stopwatch,
          lastPracticedSymbol: lastPracticedSymbol,
          setLastPracticedSymbol: onSetLastPracticedSymbol,
        }}
      >
        {!showMain && (
          <StartScreen
            trainingProgram={trainingProgram}
            onPlay={() => setShowMain(true)}
          />
        )}
        {showMain && <Main />}
      </AppContext.Provider>
    </>
  );
};

export default App;
