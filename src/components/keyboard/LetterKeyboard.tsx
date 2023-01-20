import KeyboardRow from "./KeyboardRow";
import { ClickHandler } from "./KeyboardTypes";
import styles from "./LetterKeyboard.module.css";

const LetterKeyboard: React.FC<{  clickHandler?: ClickHandler}> = (props) => {
  return (
    <>
      <div>
        <KeyboardRow
          symbols={["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P"]}
          clickHandler={props.clickHandler}
        />
        <KeyboardRow
          symbols={["A", "S", "D", "F", "G", "H", "J", "K", "L"]}
          className={styles.secondRow}
          clickHandler={props.clickHandler}
        />
        <KeyboardRow
          symbols={["Y", "X", "C", "V", "B", "N", "M"]}
          className={styles.thirdRow}
          clickHandler={props.clickHandler}
        />
      </div>
    </>
  );
};

export default LetterKeyboard;
