import React, { ReactNode, useContext, useState } from "react";
import ReactDOM from "react-dom";
import { AppContext } from "../../AppContext";
import settingsImage from "../../assets/images/settings.png";
import ModalDialog from "../core/modalDialog/ModalDialog";
import { Display } from "../display/Display";
import Keyboard from "../keyboard/Keyboard";
import Settings from "../settings/Settings";
import IToolbarAction from "../toolbar/IToolbarAction";
import Toolbar from "../toolbar/Toolbar";
import styles from "./Main.module.css";

export const Main: React.FC = () => {
  const context = useContext(AppContext);

  const onKeyboardClickHandler = (selectedSymbol: string) => {
    context.settings.solveExercise(selectedSymbol);
  };

  const getSolutionBackgroundStyle = () => {
    switch (context.settings.correctSolution) {
      case true: {
        return styles.correctSolution;
      }
      case false: {
        return styles.incorrectSolution;
      }
      default: {
        return styles.noSolution;
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
    console.log(`Hide modal dialog, as it was confirmed`);
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
        symbol={context.settings.symbol}
        exerciseType={context.settings.exerciseType}
      />
      <Keyboard
        keyboardType={context.settings.keyboardType}
        clickHandler={onKeyboardClickHandler}
      />
    </div>
  );
};
