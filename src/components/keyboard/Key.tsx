import { HighlightStatus } from "./HighlightStatus";
import { IKeyboardContext } from "./IKeyboardContext";
import styles from "./Key.module.css";

const Key: React.FC<{
  symbol: string;
  highlightStatus: HighlightStatus;
  keyboardContext: IKeyboardContext;
}> = (props) => {
  const getClassName = () => {
    switch (props.highlightStatus) {
      case HighlightStatus.Success: {
        return `${styles.highlight} ${styles.success}`;
      }
      case HighlightStatus.Failed: {
        return `${styles.highlight} ${styles.failed}`;
      }
      default:
        return "";
    }
  };
  return (
    <button
      className={`${getClassName()} ${styles.key}`}
      onClick={() => {
        props.keyboardContext.clickHandler?.(props.symbol);
      }}
    >
      {props.symbol}
    </button>
  );
};

export default Key;
