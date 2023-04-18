import { ISolvingTime } from "../../model/ISolvingTime";
import { SolutionStatus } from "../exercise/SolutionStatus";
import styles from "./HistoryItem.module.css";

const HistoryItem: React.FC<{ solvingTime: ISolvingTime }> = (props) => {
  const content = "";
  return (
    <div
      className={`${styles.historyItem} ${
        props.solvingTime.solutionStatus === SolutionStatus.Successful
          ? styles.historyItemSuccess
          : styles.historyItemFailed
      }`}
    >
      <div className={styles.historyItemSymbol}>
        <h1>
          {props.solvingTime.trainingSymbol.symbol}{" "}
          {props.solvingTime.solutionStatus === SolutionStatus.Failed &&
            content}
        </h1>
      </div>
      <div className={styles.historyItemTime}>{props.solvingTime.time} s</div>
      <div className={styles.historyItemNumberSuccessfulAnswers}>
        {props.solvingTime.numberSuccessfulAnswers}x
      </div>
    </div>
  );
};

export default HistoryItem;
