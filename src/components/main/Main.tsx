import React, { useContext, useState } from "react";
import { AppContext } from "../../AppContext";
import { MaterialIcons } from "../../assets/icons/MaterialIcons";
import { ISymbolMapper } from "../../services/symbolMapper/ISymbolMapper";
import { LetterToNumberSymbolMapper } from "../../services/symbolMapper/LetterToNumberSymbolMapper";
import { NumberToLetterSymbolMapper } from "../../services/symbolMapper/NumberToLetterSymbolMapper";
import ModalDialog from "../core/modalDialog/ModalDialog";
import { Display } from "../display/Display";
import { SolutionStatus } from "../exercise/SolutionStatus";
import History from "../history/History";
import { HighlightStatus } from "../keyboard/HighlightStatus";
import Keyboard from "../keyboard/Keyboard";
import { KeyboardType } from "../keyboard/KeyboardType";
import { HighlightedSymbols } from "../keyboard/KeyboardTypes";
import Settings from "../settings/Settings";
import IToolbarAction from "../toolbar/IToolbarAction";
import Toolbar from "../toolbar/Toolbar";
import styles from "./Main.module.css";

export const Main: React.FC = () => {
  const context = useContext(AppContext);

  const onKeyboardClickHandler = (selectedSymbol: string) => {
    context.exercise.provideExerciseSolution(selectedSymbol);
  };

  const getSymbolMapper = (): ISymbolMapper => {
    if (context.settings.keyboardType === KeyboardType.LETTER) {
      return NumberToLetterSymbolMapper;
    } else {
      return LetterToNumberSymbolMapper;
    }
  };

  const getHighlightedSymbols = (): HighlightedSymbols => {
    const map = new Map();
    switch (context.exercise.solutionStatus) {
      case SolutionStatus.Successful: {
        map.set(
          getSymbolMapper().map(context.exercise.symbol),
          HighlightStatus.Success
        );
        return map;
      }
      case SolutionStatus.Failed: {
        const map = new Map();
        map.set(
          getSymbolMapper().map(context.exercise.symbol),
          HighlightStatus.Failed
        );
        return map;
      }
      default: {
        map.set(
          getSymbolMapper().map(context.exercise.symbol),
          HighlightStatus.None
        );
        return map;
      }
    }
  };

  const [showModalDialog, setShowModalDialog] = useState(false);

  const toggleModalDialog = () => {
    setShowModalDialog((previous) => !previous);
  };

  const toolbarActions: IToolbarAction[] = [
    {
      source: MaterialIcons.Menu,
      text: "Settings",
      onClickHandler: () => {
        toggleModalDialog();
      },
    },
  ];

  return (
    <div className={styles.main}>
      <ModalDialog
        visible={showModalDialog}
        onConfirm={() => setShowModalDialog(false)}
      >
        <Settings onConfirm={() => setShowModalDialog(false)} />
      </ModalDialog>
      <Toolbar toolbarActions={toolbarActions} />
      <div className={styles.mainContainer}>
        <div className={styles.displayAndKeyboardContainer}>
          <Display
            className={styles.display}
            symbol={context.exercise.symbol}
            exerciseType={context.settings.storedParameters.exerciseType}
          />
          <Keyboard
            className={styles.keyboard}
            keyboardType={context.settings.keyboardType}
            keyboardContext={{
              clickHandler: onKeyboardClickHandler,
              highlightedSymbols: getHighlightedSymbols(),
            }}
          />
        </div>
        <div>
          {context.settings.storedParameters.showSolvingTimeList ? (
            <History />
          ) : undefined}
        </div>
      </div>
    </div>
  );
};
