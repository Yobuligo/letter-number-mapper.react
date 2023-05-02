import { useContext, useState } from "react";
import { AppContext } from "../../AppContext";
import { useCSSColor } from "../../hooks/useCSSColor";
import Keyboard from "../keyboard/Keyboard";
import { ILegendItem } from "../legend/ILegendItem";
import { Legend } from "../legend/Legend";
import styles from "./Statistics.module.css";
import { Tooltip } from "../core/tooltip/Tooltip";
import Icon from "../icon/Icon";
import { MaterialIcons } from "../../assets/icons/MaterialIcons";
import { HighlightedSymbols } from "../keyboard/KeyboardTypes";
import { ITrainingProgram } from "../../training/model/ITrainingProgram";
import { HighlightStatus } from "../keyboard/HighlightStatus";
import { KeyboardType } from "../keyboard/KeyboardType";

export const Statistics: React.FC<{ trainingProgram: ITrainingProgram }> = (
  props
) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const context = useContext(AppContext);
  const legendItems: Array<ILegendItem> = [
    { label: "Abschnitt 1", color: useCSSColor("--trainingSection1Color") },
    { label: "Abschnitt 2", color: useCSSColor("--trainingSection2Color") },
    { label: "Abschnitt 3", color: useCSSColor("--trainingSection3Color") },
    { label: "Abschnitt 4", color: useCSSColor("--trainingSection4Color") },
  ];

  const getHighlightedSymbols = (): HighlightedSymbols => {
    const map = new Map();
    props.trainingProgram.trainingSections.forEach((trainingSection, index) => {
      let highlightStatus = HighlightStatus.None;
      switch (index) {
        case 0: {
          highlightStatus = HighlightStatus.Lightest;
          break;
        }
        case 1: {
          highlightStatus = HighlightStatus.Light;
          break;
        }
        case 2: {
          highlightStatus = HighlightStatus.Dark;
          break;
        }
        case 3: {
          highlightStatus = HighlightStatus.Darkest;
          break;
        }
      }
      trainingSection
        .findAllTrainingSymbols()
        .forEach((trainingSymbol) =>
          map.set(trainingSymbol.symbol, highlightStatus)
        );
    });
    return map;
  };

  const getStatisticsKeyboardType = () => {
    if (context.settings.keyboardType === KeyboardType.LETTER) {
      return KeyboardType.NUMBER;
    } else {
      return KeyboardType.LETTER;
    }
  };

  return (
    <section className={styles.statistics}>
      {showTooltip && (
        <Tooltip onHide={() => setShowTooltip(false)}>
          <p style={{ display: "inline-block", margin: 0 }}>
            Die Abschnitte repräsentieren die Fächer in einem
            Lern-Karteikartensystem. Die Buchstaben und Zahlen bewegen sich je
            nachdem ob richtig oder falsch beantwortet in diesen Fächern auf und
            ab.
          </p>
        </Tooltip>
      )}
      <div className={styles.title}>
        <h1>Statistik</h1>
        <Icon
          icon={MaterialIcons.Info}
          onClick={() => setShowTooltip(true)}
          onMouseEnter={() => {
            setShowTooltip(true);
          }}
          onMouseLeave={() => {
            setShowTooltip(false);
          }}
        />
      </div>
      <p>
        Hier kannst du sehen, wie gut du die Zahlen und Buchstaben bereits
        beherrschst. Je dunkler, desto besser.
      </p>
      <Keyboard
        className={styles.keyboard}
        keyboardType={getStatisticsKeyboardType()}
        keyboardContext={{
          clickHandler: () => {},
          highlightedSymbols: getHighlightedSymbols(),
        }}
      />
      <Legend legendItems={legendItems} className={styles.legend} />
    </section>
  );
};
