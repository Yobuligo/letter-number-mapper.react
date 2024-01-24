import { IKeyboardContext } from "./IKeyboardContext";
import { KeyboardLayout } from "./KeyboardLayout";
import KeyboardRow from "./KeyboardRow";
import styles from "./LetterKeyboard.module.css";

const LetterKeyboard: React.FC<{
  keyboardLayout: KeyboardLayout;
  keyboardContext: IKeyboardContext;
}> = (props) => {
  return (
    <div className={styles.letterKeyboard}>
      <KeyboardRow
        symbols={[
          "Q",
          "W",
          "E",
          "R",
          "T",
          props.keyboardLayout === KeyboardLayout.QWERTY ? "Y" : "Z",
          "U",
          "I",
          "O",
          "P",
        ]}
        keyboardContext={props.keyboardContext}
      />
      <KeyboardRow
        symbols={["A", "S", "D", "F", "G", "H", "J", "K", "L"]}
        keyboardContext={props.keyboardContext}
      />
      <KeyboardRow
        symbols={[
          props.keyboardLayout === KeyboardLayout.QWERTY ? "Z" : "Y",
          "X",
          "C",
          "V",
          "B",
          "N",
          "M",
        ]}
        className={styles.thirdRow}
        keyboardContext={props.keyboardContext}
      />
    </div>
  );
};

export default LetterKeyboard;
