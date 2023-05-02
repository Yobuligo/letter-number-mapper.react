import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { DevModeKeyCount } from "../devMode/DevModeKeyCount";
import { HighlightStatus } from "./HighlightStatus";
import { IKeyboardContext } from "./IKeyboardContext";
import styles from "./Key.module.css";

const Key: React.FC<{
  symbol: string;
  highlightStatus: HighlightStatus;
  keyboardContext: IKeyboardContext;
}> = (props) => {
  const context = useContext(AppContext);
  const getClassName = () => {
    switch (props.highlightStatus) {
      case HighlightStatus.Success: {
        return `${styles.highlight} ${styles.success}`;
      }
      case HighlightStatus.Failed: {
        return `${styles.highlight} ${styles.failed}`;
      }
      case HighlightStatus.Darkest: {
        return styles.darkest;
      }
      case HighlightStatus.Dark: {
        return styles.dark;
      }
      case HighlightStatus.Light: {
        return styles.light;
      }
      case HighlightStatus.Lightest: {
        return styles.lightest;
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
      {context.devMode.devModeActive && (
        <DevModeKeyCount symbol={props.symbol} />
      )}
    </button>
  );
};

export default Key;
