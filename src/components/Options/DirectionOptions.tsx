import { useState } from "react";
import { Direction } from "../../gameConfig/Direction";
import { GameConfig } from "../../gameConfig/GameConfig";
import styles from "./DirectionOptions.module.css";

const DirectionOptions: React.FC = () => {
  const [direction, setDirection] = useState(Direction.LETTER_TO_NUMBER);

  return (
    <div className={styles.directionOptions}>
      <h3>Direction</h3>
      <div>
        <input
          type="radio"
          name="direction"
          checked={direction === Direction.LETTER_TO_NUMBER ? true : false}
          onClick={() => {
            setDirection(Direction.LETTER_TO_NUMBER);
            GameConfig.direction = Direction.LETTER_TO_NUMBER;
          }}
        />
        <label htmlFor="LetterToNumber">Letter to number</label>
      </div>
      <div>
        <input
          type="radio"
          name="direction"
          checked={direction === Direction.NUMBER_TO_LETTER ? true : false}
          onClick={() => {
            setDirection(Direction.NUMBER_TO_LETTER);
            GameConfig.direction = Direction.NUMBER_TO_LETTER;
          }}
        />
        <label htmlFor="NumberToLetter">Number to letter</label>
      </div>
    </div>
  );
};

export default DirectionOptions;
