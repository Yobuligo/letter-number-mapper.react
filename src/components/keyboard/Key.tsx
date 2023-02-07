import { IKeyboardContext } from "./IKeyboardContext";

const Key: React.FC<{
  symbol: string;
  highlight: boolean;
  keyboardContext: IKeyboardContext;
}> = (props) => {
  const getHighlightClassName = (): string => {
    if (props.highlight) {
      return props.keyboardContext.highlightSymbolClassName ?? "";
    } else {
      return "";
    }
  };
  return (
    <button
      className={getHighlightClassName()}
      onClick={() => {
        props.keyboardContext.clickHandler?.(props.symbol);
      }}
    >
      {props.symbol}
    </button>
  );
};

export default Key;
