import { useState } from "react";
import { GameConfig } from "../../gameConfig/GameConfig";

const OthersOptions: React.FC = () => {
  const [showResult, setShowResult] = useState(GameConfig.showResult);
  return (
    <div>
      <label htmlFor="showResult">Show Result</label>
      <input
        type="checkbox"
        id="showResult"
        checked={showResult ? true : false}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setShowResult((value) => {
            GameConfig.showResult = !value;
            return !value;
          });
        }}
      />
    </div>
  );
};

export default OthersOptions;
