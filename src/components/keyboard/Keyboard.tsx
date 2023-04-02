import { IKeyboardContext } from "./IKeyboardContext";
import styles from "./Keyboard.module.css";
import { KeyboardType } from "./KeyboardType";
import LetterKeyboard from "./LetterKeyboard";
import NumberKeyboard from "./NumberKeyboard";

const Keyboard: React.FC<{
  keyboardType: KeyboardType;
  keyboardContext: IKeyboardContext;
  className?: string;
}> = (props) => {
  const createKeyboardContext = (): IKeyboardContext => {
    return {
      ...props.keyboardContext,
      highlightSymbolClassName: styles.highlight,
    };
  };
  return (
    <div className={`${props.className} ${styles.keyboard}`}>
      {props.keyboardType === KeyboardType.LETTER ? (
        <LetterKeyboard keyboardContext={createKeyboardContext()} />
      ) : (
        <NumberKeyboard keyboardContext={createKeyboardContext()} />
      )}
    </div>
  );
};

export default Keyboard;
