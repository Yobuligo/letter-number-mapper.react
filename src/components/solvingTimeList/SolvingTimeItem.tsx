import { ISolvingTime } from "../../model/ISolvingTime";
import styles from "./SolvingTimeItem.module.css";

const SolvingTimeItem: React.FC<{ solvingTime: ISolvingTime }> = (props) => {
  return (
    <div className={styles.solvingTimeItem}>
      <div className={styles.solvingTimeItemSymbol}>
        <h1>{props.solvingTime.trainingSymbol.symbol}</h1>
      </div>
      <div className={styles.solvingTimeItemTime}>
        {props.solvingTime.time} s
      </div>
      <div className={styles.solvingTimeItemNumberSuccessfulAnswers}>
        {props.solvingTime.numberSuccessfulAnswers}x
      </div>
    </div>
  );
};

export default SolvingTimeItem;
