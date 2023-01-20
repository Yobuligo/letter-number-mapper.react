import KeyboardRow from "./KeyboardRow";

const NumberKeyboard: React.FC = () => {
  return (
    <>
      <div>
        <KeyboardRow
          symbols={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
        />
        <KeyboardRow
          symbols={["11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]}
        />
        <KeyboardRow symbols={["21", "22", "23", "24", "25", "26"]} />
      </div>
    </>
  );
};

export default NumberKeyboard;
