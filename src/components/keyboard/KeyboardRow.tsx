import { IKeyboardContext } from "./IKeyboardContext";
import Key from "./Key";

const KeyboardRow: React.FC<{
  symbols: string[];
  className?: string;
  keyboardContext: IKeyboardContext;
}> = (props) => {
  const highlightSymbol = (symbol: string): boolean => {
    if (
      props.keyboardContext.highlightedSymbols?.find((element) => {
        return element === symbol;
      })
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className={props.className}>
      {props.symbols.map((symbol) => {
        return (
          <Key
            key={symbol}
            symbol={symbol}
            highlight={highlightSymbol(symbol)}
            keyboardContext={props.keyboardContext}
          />
        );
      })}
    </div>
  );
};

export default KeyboardRow;
