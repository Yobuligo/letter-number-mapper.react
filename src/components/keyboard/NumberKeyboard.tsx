import KeyboardRow from "./KeyboardRow";
import { ClickHandler } from "./KeyboardTypes";

const NumberKeyboard: React.FC<{ clickHandler?: ClickHandler }> = (props) => {
  return (
    <>
      <div>
        <KeyboardRow
          symbols={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
          clickHandler={props.clickHandler}
        />
        <KeyboardRow
          symbols={["11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]}
          clickHandler={props.clickHandler}
        />
        <KeyboardRow
          symbols={["21", "22", "23", "24", "25", "26"]}
          clickHandler={props.clickHandler}
        />
      </div>
    </>
  );
};

export default NumberKeyboard;
