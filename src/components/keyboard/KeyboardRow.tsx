import Key from "./Key";

const KeyboardRow: React.FC<{ symbols: string[]; className?: string }> = (
  props
) => {
  return (
    <div className={props.className}>
      {props.symbols.map((symbol) => {
        return <Key symbol={symbol} />;
      })}
    </div>
  );
};

export default KeyboardRow;
