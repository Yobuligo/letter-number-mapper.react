
import { HighlightStatus } from "./HighlightStatus";
import { IKeyboardContext } from "./IKeyboardContext";
import Key from "./Key";

const KeyboardRow: React.FC<{
  symbols: string[];
  className?: string;
  keyboardContext: IKeyboardContext;
}> = (props) => {
  const getHighlightStatusBySymbol = (symbol: string): HighlightStatus => {
    return props.keyboardContext.highlightedSymbols?.get(symbol)!
  }

  return (
    <div className={props.className}>
      {props.symbols.map((symbol) => {
        return (
          <Key
            key={symbol}
            symbol={symbol}
            highlightStatus={getHighlightStatusBySymbol(symbol)}
            keyboardContext={props.keyboardContext}
          />
        );
      })}
    </div>
  );
};

export default KeyboardRow;
