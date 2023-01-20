import KeyboardRow from "./KeyboardRow";
import styles from "./LetterKeyboard.module.css";

const LetterKeyboard: React.FC = () => {
  return (
    <>
      <div>
        <KeyboardRow
          symbols={["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P"]}
        />
        <KeyboardRow
          symbols={["A", "S", "D", "F", "G", "H", "J", "K", "L"]}
          className={styles.secondRow}
        />
        <KeyboardRow
          symbols={["Y", "X", "C", "V", "B", "N", "M"]}
          className={styles.thirdRow}
        />
      </div>
    </>
  );
};

export default LetterKeyboard;
