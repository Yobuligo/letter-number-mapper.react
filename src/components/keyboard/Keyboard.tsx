import styles from "./Keyboard.module.css";
import { KeyboardType } from "./KeyboardType";
import { ClickHandler } from "./KeyboardTypes";
import LetterKeyboard from "./LetterKeyboard";
import NumberKeyboard from "./NumberKeyboard";

const Keyboard: React.FC<{
  keyboardType: KeyboardType;
  clickHandler?: ClickHandler;
}> = (props) => {
  return (
    <div className={styles.keyboard}>
      {props.keyboardType === KeyboardType.LETTER ? (
        <LetterKeyboard clickHandler={props.clickHandler} />
      ) : (
        <NumberKeyboard clickHandler={props.clickHandler} />
      )}
    </div>
  );
};

export default Keyboard;
