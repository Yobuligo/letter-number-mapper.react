import styles from "./Keyboard.module.css";
import { KeyboardType } from "./KeyboardType";
import LetterKeyboard from "./LetterKeyboard";
import NumberKeyboard from "./NumberKeyboard";

const Keyboard: React.FC<{ keyboardType: KeyboardType }> = (props) => {
  return (
    <div className={styles.keyboard}>
      {props.keyboardType === KeyboardType.LETTER ? (
        <LetterKeyboard />
      ) : (
        <NumberKeyboard />
      )}
    </div>
  );
};

export default Keyboard;
