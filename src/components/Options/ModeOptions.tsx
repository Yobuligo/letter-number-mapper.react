import { useState } from "react";
import { GameConfig } from "../../gameConfig/GameConfig";
import { Mode } from "../../gameConfig/Mode";
import styles from "./ModeOptions.module.css";

const ModeOptions: React.FC = () => {
  const [mode, setMode] = useState(Mode.RANDOM);

  return (
    <div className={styles.modeOptions}>
      <h3>Mode</h3>
      <div>
        <input
          type="radio"
          name="mode"
          checked={mode === Mode.RANDOM ? true : false}
          onClick={() => {
            setMode(Mode.RANDOM);
            GameConfig.mode = Mode.RANDOM;
          }}
        />
        <label htmlFor="random">Random</label>
      </div>
      <div>
        <input
          type="radio"
          name="mode"
          checked={mode === Mode.ASCENDING ? true : false}
          onClick={() => {
            setMode(Mode.ASCENDING);
            GameConfig.mode = Mode.ASCENDING;
          }}
        />
        <label htmlFor="Ascending">Ascending</label>
      </div>
    </div>
  );
};

export default ModeOptions;
