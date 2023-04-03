import React, { ReactNode, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { AppContext } from "../../AppContext";
import { MaterialIcons } from "../../assets/icons/MaterialIcons";
import { ISymbolMapper } from "../../services/symbolMapper/ISymbolMapper";
import { LetterToNumberSymbolMapper } from "../../services/symbolMapper/LetterToNumberSymbolMapper";
import { NumberToLetterSymbolMapper } from "../../services/symbolMapper/NumberToLetterSymbolMapper";
import Bottom from "../bottom/Bottom";
import ModalDialog from "../core/modalDialog/ModalDialog";
import { Display } from "../display/Display";
import { SolutionStatus } from "../exercise/SolutionStatus";
import Keyboard from "../keyboard/Keyboard";
import { KeyboardType } from "../keyboard/KeyboardType";
import Settings from "../settings/Settings";
import SolvingTimeList from "../solvingTimeList/SolvingTimeList";
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

  const getHighlightedSymbols = (): string[] => {
    switch (context.exercise.solutionStatus) {
      case SolutionStatus.SUCCESSFUL: {
        return [getSymbolMapper().map(context.exercise.symbol)];
      }
      case SolutionStatus.FAILED: {
        return [];
      }
      case SolutionStatus.NOT_PROVIDED: {
        return [];
      }
    }
  };

  const getSolutionBackgroundStyle = () => {
    switch (context.exercise.solutionStatus) {
      case SolutionStatus.SUCCESSFUL: {
        // currently reset as the button itself is highlighted
        return styles.noSolutionProvided;
      }
      case SolutionStatus.FAILED: {
        return styles.failedSolution;
      }
      case SolutionStatus.NOT_PROVIDED: {
        return styles.noSolutionProvided;
      }
    }
  };

  const [showModalDialog, setShowModalDialog] = useState(false);
  const [modalDialogContent, setModalDialogContent] =
    useState<ReactNode>(null);

  useEffect(() => {
    setModalDialogContent(showModalDialog ? <Settings /> : null)
  }, [showModalDialog])

  const toggleModalDialog = () => {
    setShowModalDialog((previous) => !previous)
  }

  const toolbarActions: IToolbarAction[] = [
    {
      source: MaterialIcons.Menu,
      text: "Settings",
      onClickHandler: () => {
        toggleModalDialog()
      },
    },
  ];

  return (
    <div className={`${styles.main} ${getSolutionBackgroundStyle()}`}>
      {showModalDialog
        ? ReactDOM.createPortal(
          <ModalDialog
            onConfirm={() => {
              setShowModalDialog(false)
            }}
          >
            {modalDialogContent}
          </ModalDialog>,
          document.getElementById("overlay")!
        )
        : ""}
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
            <SolvingTimeList />
          ) : undefined}
        </div>
      </div>
      <Bottom />
    </div>
  );
};
