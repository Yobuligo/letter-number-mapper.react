import { useContext, useState } from "react";
import { AppContext } from "../../AppContext";
import { useCSSColor } from "../../hooks/useCSSColor";
import Keyboard from "../keyboard/Keyboard";
import { ILegendItem } from "../legend/ILegendItem";
import { Legend } from "../legend/Legend";
import styles from "./Statistics.module.css";
import { Tooltip } from "../core/tooltip/Tooltip";

export const Statistics: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const context = useContext(AppContext);
  const legendItems: Array<ILegendItem> = [
    { label: "Abschnitt 1", color: useCSSColor("--trainingSection1Color") },
    { label: "Abschnitt 2", color: useCSSColor("--trainingSection2Color") },
    { label: "Abschnitt 3", color: useCSSColor("--trainingSection3Color") },
    { label: "Abschnitt 4", color: useCSSColor("--trainingSection4Color") },
  ];

  return (
    <section className={styles.statistics}>
      <h1>
        Statistik
        {showTooltip && (
          <Tooltip onHide={() => setShowTooltip(false)}>
            <p style={{ display: "inline-block", margin: 0 }}>test</p>
          </Tooltip>
        )}
      </h1>
      <p>
        Hier kannst du sehen, wie gut du die Zahlen und Buchstaben bereits
        beherrschst. Je dunkler, desto besser.
      </p>
      <Keyboard
        className={styles.keyboard}
        keyboardType={context.settings.keyboardType}
        keyboardContext={{
          clickHandler: () => {},
          highlightedSymbols: new Map(),
        }}
      />
      <Legend legendItems={legendItems} className={styles.legend} />
      <p>
        Die Abschnitte repräsentieren die Fächer in einem
        Lern-Karteikartensystem. Die Buchstaben und Zahlen bewegen sich je
        nachdem ob richtig oder falsch beantwortet in diesen Fächern auf und ab.
      </p>
    </section>
  );
};
