import { ClickHandler } from "./KeyboardTypes";

const Key: React.FC<{ symbol: string; clickHandler?: ClickHandler }> = (
  props
) => {
  return (
    <button
      onClick={() => {
        props.clickHandler?.(props.symbol);
      }}
    >
      {props.symbol}
    </button>
  );
};

export default Key;
