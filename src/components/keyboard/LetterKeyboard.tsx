import { IKeyboardContext } from "./IKeyboardContext";
import KeyboardRow from "./KeyboardRow";
import styles from "./LetterKeyboard.module.css";

const LetterKeyboard: React.FC<{
  keyboardContext: IKeyboardContext;
}> = (props) => {
  return (
    <>
      <div>
        <KeyboardRow
          symbols={["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P"]}
          keyboardContext={props.keyboardContext}
        />
        <KeyboardRow
          symbols={["A", "S", "D", "F", "G", "H", "J", "K", "L"]}
          className={styles.secondRow}
          keyboardContext={props.keyboardContext}
        />
        <KeyboardRow
          symbols={["Y", "X", "C", "V", "B", "N", "M"]}
          className={styles.thirdRow}
          keyboardContext={props.keyboardContext}
        />
      </div>
    </>
  );
};

export default LetterKeyboard;
