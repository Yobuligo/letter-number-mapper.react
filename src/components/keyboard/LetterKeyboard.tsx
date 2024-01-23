import { IKeyboardContext } from "./IKeyboardContext";
import KeyboardRow from "./KeyboardRow";
import styles from "./LetterKeyboard.module.css";

const LetterKeyboard: React.FC<{
  keyboardContext: IKeyboardContext;
}> = (props) => {
  return (
      <div className={styles.letterKeyboard}>
        <KeyboardRow
          symbols={["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]}
          keyboardContext={props.keyboardContext}
        />
        <KeyboardRow
          symbols={["A", "S", "D", "F", "G", "H", "J", "K", "L"]}
          keyboardContext={props.keyboardContext}
        />
        <KeyboardRow
          symbols={["Z", "X", "C", "V", "B", "N", "M"]}
          className={styles.thirdRow}
          keyboardContext={props.keyboardContext}
        />
      </div>
  );
};

export default LetterKeyboard;
