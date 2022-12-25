import { useState } from "react";
import { GameConfig } from "../../gameConfig/GameConfig";
import { OptionsChangedHandler } from "./OptionsChangedHandler";

const OthersOptions: React.FC<{ onOptionsChanged: OptionsChangedHandler }> = (
  props
) => {
  const [showResult, setShowResult] = useState(GameConfig.showResult);

  const onChangeHandler = () => {
    setShowResult((value) => {
      GameConfig.showResult = !value;
      return !value;
    });
    props.onOptionsChanged(GameConfig);
  };

  return (
    <div>
      <label htmlFor="showResult">Show Result</label>
      <input
        type="checkbox"
        id="showResult"
        checked={showResult ? true : false}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default OthersOptions;
