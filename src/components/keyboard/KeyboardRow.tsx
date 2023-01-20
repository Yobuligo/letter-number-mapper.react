import Key from "./Key";
import { ClickHandler } from "./KeyboardTypes";

const KeyboardRow: React.FC<{
  symbols: string[];
  className?: string;
  clickHandler?: ClickHandler;
}> = (props) => {
  return (
    <div className={props.className}>
      {props.symbols.map((symbol) => {
        return (
          <Key key={symbol} symbol={symbol} clickHandler={props.clickHandler} />
        );
      })}
    </div>
  );
};

export default KeyboardRow;
