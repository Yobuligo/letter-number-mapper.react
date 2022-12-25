import { useState } from "react";
import { Direction } from "../../gameConfig/Direction";
import { GameConfig } from "../../gameConfig/GameConfig";
import styles from "./DirectionOptions.module.css";
import { OptionsChangedHandler } from "./OptionsChangedHandler";

const DirectionOptions: React.FC<{
  onOptionsChanged: OptionsChangedHandler;
}> = (props) => {
  const [direction, setDirection] = useState(GameConfig.direction);

  const onSetLetterToNumberHandler = () => {
    setDirection(Direction.LETTER_TO_NUMBER);
    GameConfig.direction = Direction.LETTER_TO_NUMBER;
    props.onOptionsChanged(GameConfig);
  };

  const onSetNumberToLetterHandler = () => {
    setDirection(Direction.NUMBER_TO_LETTER);
    GameConfig.direction = Direction.NUMBER_TO_LETTER;
    props.onOptionsChanged(GameConfig);
  };

  return (
    <div className={styles.directionOptions}>
      <h3>Direction</h3>
      <div>
        <input
          type="radio"
          name="direction"
          checked={direction === Direction.LETTER_TO_NUMBER ? true : false}
          onChange={onSetLetterToNumberHandler}
        />
        <label htmlFor="LetterToNumber">Letter to number</label>
      </div>
      <div>
        <input
          type="radio"
          name="direction"
          checked={direction === Direction.NUMBER_TO_LETTER ? true : false}
          onChange={onSetNumberToLetterHandler}
        />
        <label htmlFor="NumberToLetter">Number to letter</label>
      </div>
    </div>
  );
};

export default DirectionOptions;
