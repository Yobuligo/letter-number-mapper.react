import React, { ReactNode, useContext, useState } from "react";
import ReactDOM from "react-dom";
import { AppContext } from "../../AppContext";
import settingsImage from "../../images/settings.png";
import ModalDialog from "../core/modalDialog/ModalDialog";
import { Display } from "../display/Display";
import { SolutionStatus } from "../exercise/SolutionStatus";
import Keyboard from "../keyboard/Keyboard";
import Settings from "../settings/Settings";
import IToolbarAction from "../toolbar/IToolbarAction";
import Toolbar from "../toolbar/Toolbar";
import styles from "./Main.module.css";

export const Main: React.FC = () => {
  const context = useContext(AppContext);

  const onKeyboardClickHandler = (selectedSymbol: string) => {
    context.exercise.provideExerciseSolution(selectedSymbol);
  };

  const getSolutionBackgroundStyle = () => {
    switch (context.exercise.solutionStatus) {
      case SolutionStatus.SUCCESSFUL: {
        return styles.successfulSolution;
      }
      case SolutionStatus.FAILED: {
        return styles.failedSolution;
      }
      case SolutionStatus.NOT_PROVIDED: {
        return styles.noSolutionProvided;
      }
    }
  };

  const [modalDialogActive, setModalDialogActive] = useState(false);
  const [modalDialogChildren, setModalDialogChildren] =
    useState<ReactNode>(null);

  const showModalDialog = (children: ReactNode) => {
    setModalDialogChildren(children);
    setModalDialogActive(true);
  };

  const hideModalDialog = () => {
    setModalDialogChildren(null);
    setModalDialogActive(false);
  };

  const toolbarActions: IToolbarAction[] = [
    {
      source: settingsImage,
      text: "Settings",
      onClickHandler: () => {
        showModalDialog(<Settings />);
      },
    },
  ];

  return (
    <div className={`${styles.main} ${getSolutionBackgroundStyle()}`}>
      {modalDialogActive
        ? ReactDOM.createPortal(
            <ModalDialog
              onConfirm={() => {
                hideModalDialog();
              }}
            >
              {modalDialogChildren}
            </ModalDialog>,
            document.getElementById("overlay")!
          )
        : ""}
      <Toolbar toolbarActions={toolbarActions} />
      <Display
        symbol={context.exercise.symbol}
        exerciseType={context.settings.exerciseType}
      />
      <Keyboard
        keyboardType={context.settings.keyboardType}
        clickHandler={onKeyboardClickHandler}
      />
    </div>
  );
};
