import { useState } from "react";
import { GameConfig } from "../../gameConfig/GameConfig";
import { Mode } from "../../gameConfig/Mode";
import styles from "./ModeOptions.module.css";
import { OptionsChangedHandler } from "./OptionsChangedHandler";

const ModeOptions: React.FC<{ onOptionsChanged: OptionsChangedHandler }> = (
  props
) => {
  const [mode, setMode] = useState(GameConfig.mode);

  const onSetModeRandomHandler = () => {
    setMode(Mode.RANDOM);
    GameConfig.mode = Mode.RANDOM;
    props.onOptionsChanged(GameConfig);
  };

  const onSetModeAscendingHandler = () => {
    setMode(Mode.ASCENDING);
    GameConfig.mode = Mode.ASCENDING;
    props.onOptionsChanged(GameConfig);
  };

  return (
    <div className={styles.modeOptions}>
      <h3>Mode</h3>
      <div>
        <input
          type="radio"
          name="mode"
          checked={mode === Mode.RANDOM ? true : false}
          onChange={onSetModeRandomHandler}
        />
        <label htmlFor="random">Random</label>
      </div>
      <div>
        <input
          type="radio"
          name="mode"
          checked={mode === Mode.ASCENDING ? true : false}
          onChange={onSetModeAscendingHandler}
        />
        <label htmlFor="Ascending">Ascending</label>
      </div>
    </div>
  );
};

export default ModeOptions;
