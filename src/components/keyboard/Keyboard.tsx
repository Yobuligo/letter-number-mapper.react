import { IKeyboardContext } from "./IKeyboardContext";
import styles from "./Keyboard.module.css";
import { KeyboardLayout } from "./KeyboardLayout";
import { KeyboardType } from "./KeyboardType";
import LetterKeyboard from "./LetterKeyboard";
import NumberKeyboard from "./NumberKeyboard";

const Keyboard: React.FC<{
  keyboardType: KeyboardType;
  keyboardLayout: KeyboardLayout;
  keyboardContext: IKeyboardContext;
  className?: string;
}> = (props) => {
  return (
    <div className={`${props.className} ${styles.keyboard}`}>
      {props.keyboardType === KeyboardType.LETTER ? (
        <LetterKeyboard
          keyboardContext={props.keyboardContext}
          keyboardLayout={props.keyboardLayout}
        />
      ) : (
        <NumberKeyboard keyboardContext={props.keyboardContext} />
      )}
    </div>
  );
};

export default Keyboard;
