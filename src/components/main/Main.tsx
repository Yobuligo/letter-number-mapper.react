import React, { ReactNode, useContext, useState } from "react";
import ReactDOM from "react-dom";
import { AppContext } from "../../AppContext";
import settingsImage from "../../images/settings.png";
import { SymbolMapper } from "../../symbolInfo/SymbolMapper";
import ModalDialog from "../core/modalDialog/ModalDialog";
import { Display } from "../display/Display";
import Keyboard from "../keyboard/Keyboard";
import Settings from "../settings/Settings";
import IToolbarAction from "../toolbar/IToolbarAction";
import Toolbar from "../toolbar/Toolbar";
import styles from "./Main.module.css";

export const Main: React.FC<{
  symbol: string;
}> = (props) => {
  const context = useContext(AppContext);

  const onKeyboardClickHandler = (selectedSymbol: string) => {
    console.log(SymbolMapper.numberToLetter(selectedSymbol));
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
    <div className={styles.main}>
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
        symbol={props.symbol}
        exerciseType={context.settings.exerciseType}
      />
      <Keyboard
        keyboardType={context.settings.keyboardType}
        clickHandler={onKeyboardClickHandler}
      />
    </div>
  );
};
