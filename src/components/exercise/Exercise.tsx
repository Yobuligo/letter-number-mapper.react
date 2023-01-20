import { ExerciseType } from "./ExerciseType";
import styles from "./Exercise.module.css";

export const Exercise: React.FC<{
  symbol: string;
  exerciseType: ExerciseType;
}> = (props) => {
  return (
    <div className={styles.exercise}>
      <h4>
        {props.exerciseType == ExerciseType.LETTER_TO_NUMBER
          ? "Der wievielte Buchstabe ist"
          : "Welcher Buchstabe ist an Stelle"}
      </h4>
      <h1>{props.symbol}</h1>
      <h4>im Alphabet?</h4>
    </div>
  );
};
