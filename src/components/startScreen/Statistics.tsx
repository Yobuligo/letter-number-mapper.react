import { useContext, useState } from "react";
import { AppContext } from "../../AppContext";
import { MaterialIcons } from "../../assets/icons/MaterialIcons";
import { useCSSColor } from "../../hooks/useCSSColor";
import { useTranslation } from "../../hooks/useTranslation";
import { ITrainingProgram } from "../../training/model/ITrainingProgram";
import { Tooltip } from "../core/tooltip/Tooltip";
import Icon from "../icon/Icon";
import { HighlightStatus } from "../keyboard/HighlightStatus";
import Keyboard from "../keyboard/Keyboard";
import { KeyboardType } from "../keyboard/KeyboardType";
import { HighlightedSymbols } from "../keyboard/KeyboardTypes";
import { ILegendItem } from "../legend/ILegendItem";
import { Legend } from "../legend/Legend";
import styles from "./Statistics.module.css";

export const Statistics: React.FC<{ trainingProgram: ITrainingProgram }> = (
  props
) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { t } = useTranslation();
  const context = useContext(AppContext);
  const legendItems: Array<ILegendItem> = [
    {
      label: t.statistics.section1,
      color: useCSSColor("--trainingSection1Color"),
    },
    {
      label: t.statistics.section2,
      color: useCSSColor("--trainingSection2Color"),
    },
    {
      label: t.statistics.section3,
      color: useCSSColor("--trainingSection3Color"),
    },
    {
      label: t.statistics.section4,
      color: useCSSColor("--trainingSection4Color"),
    },
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
            {t.statistics.tooltip}
          </p>
        </Tooltip>
      )}
      <div className={styles.title}>
        <h1>{t.statistics.title}</h1>
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
      <p>{t.statistics.explanation}</p>
      <Keyboard
        className={styles.keyboard}
        keyboardLayout={context.settings.storedParameters.keyboardLayout}
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
