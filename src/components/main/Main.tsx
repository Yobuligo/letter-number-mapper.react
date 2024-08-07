import React, { useContext, useState } from "react";
import { AppContext } from "../../AppContext";
import { MaterialIcons } from "../../assets/icons/MaterialIcons";
import { SymbolMapperInfo } from "../../services/symbolMapper/SymbolMapperInfo";
import ModalDialog from "../core/modalDialog/ModalDialog";
import { DevModeBanner } from "../devMode/DevModeBanner";
import { Display } from "../display/Display";
import { SolutionStatus } from "../exercise/SolutionStatus";
import History from "../history/History";
import { HighlightStatus } from "../keyboard/HighlightStatus";
import Keyboard from "../keyboard/Keyboard";
import { HighlightedSymbols } from "../keyboard/KeyboardTypes";
import Settings from "../settings/Settings";
import IToolbarAction from "../toolbar/IToolbarAction";
import Toolbar from "../toolbar/Toolbar";
import styles from "./Main.module.scss";
import { useTranslation } from "../../hooks/useTranslation";

export const Main: React.FC<{ onNavigateBack: () => void }> = (props) => {
  const { t } = useTranslation();
  const context = useContext(AppContext);

  const onKeyboardClickHandler = (selectedSymbol: string) => {
    context.exercise.provideExerciseSolution(selectedSymbol);
  };

  const getHighlightedSymbols = (): HighlightedSymbols => {
    const map = new Map();
    const exerciseType = context.settings.storedParameters.exerciseType;
    const symbolMapper = SymbolMapperInfo.get(exerciseType);
    const mappedSymbol = symbolMapper.map(context.exercise.symbol);
    switch (context.exercise.solutionStatus) {
      case SolutionStatus.Successful: {
        map.set(mappedSymbol, HighlightStatus.Success);
        return map;
      }
      case SolutionStatus.Failed: {
        map.set(mappedSymbol, HighlightStatus.Failed);
        return map;
      }
      default: {
        map.set(mappedSymbol, HighlightStatus.None);
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
      icon: MaterialIcons.ChevronLeft,
      text: t.main.back,
      onClickHandler: props.onNavigateBack,
    },
    {
      icon: MaterialIcons.Menu,
      text: t.main.settings,
      onClickHandler: toggleModalDialog,
    },
  ];

  return (
    <div className={styles.main}>
      <ModalDialog
        visible={showModalDialog}
        onConfirm={() => setShowModalDialog(false)}
        className={styles.modalDialog}
        classNameOnShow={styles.modalDialogVisible}
      >
        <Settings onConfirm={() => setShowModalDialog(false)} />
      </ModalDialog>
      <DevModeBanner />
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
            keyboardLayout={context.settings.storedParameters.keyboardLayout}
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
