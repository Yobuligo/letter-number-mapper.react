import { useContext } from "react";
import { AppContext } from "../../AppContext";
import styles from "./Exercise.module.css";
import { ExerciseType } from "./ExerciseType";

export const Exercise: React.FC<{
  symbol: string;
}> = (props) => {
  const context = useContext(AppContext);
  return (
    <div className={styles.exercise}>
      <h4>
        {context.storedSettings.exerciseType === ExerciseType.LETTER_TO_NUMBER
          ? "Der wievielte Buchstabe ist"
          : "Welcher Buchstabe ist an Stelle"}
      </h4>
      <h1>{props.symbol}</h1>
      <h4>im Alphabet?</h4>
    </div>
  );
};
