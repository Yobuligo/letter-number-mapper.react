import { useContext } from "react";
import { useCSSColor } from "../../hooks/useCSSColor";
import Keyboard from "../keyboard/Keyboard";
import styles from "./Statistics.module.css";
import { AppContext } from "../../AppContext";

export const Statistics: React.FC = () => {
  const context = useContext(AppContext);
  const legends: Array<{ label: string; color: string }> = [
    { label: "Section 1", color: useCSSColor("--trainingSection1Color") },
    { label: "Section 2", color: useCSSColor("--trainingSection2Color") },
    { label: "Section 3", color: useCSSColor("--trainingSection3Color") },
    { label: "Section 4", color: useCSSColor("--trainingSection4Color") },
  ];

  const legendItem = (legendLabel: string, legendColor: string) => {
    return (
      <div key={legendLabel}>
        <div
          className={styles.trainingSectionColor}
          style={{ backgroundColor: legendColor }}
        ></div>
        <div className={styles.trainingSectionLabel}>{legendLabel}</div>
      </div>
    );
  };
  return (
    <div className={styles.statistics}>
      <h1>Statistics</h1>
      <Keyboard
        className={styles.keyboard}
        keyboardType={context.settings.keyboardType}
        keyboardContext={{
          clickHandler: () => {},
          highlightedSymbols: new Map(),
        }}
      />
      <div className={styles.legend}>
        {legends.map((legend) => legendItem(legend.label, legend.color))}
      </div>
      {/* <div className={styles.gradientTest}></div> */}
    </div>
  );
};
