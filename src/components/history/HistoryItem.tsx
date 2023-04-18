import { ISolvingTime } from "../../model/ISolvingTime";
import { SymbolMapperInfo } from "../../services/symbolMapper/SymbolMapperInfo";
import { SolutionStatus } from "../exercise/SolutionStatus";
import styles from "./HistoryItem.module.css";

const getMappedSymbol = (solvingTime: ISolvingTime): string => {
  return SymbolMapperInfo.get(solvingTime.exerciseType).map(
    solvingTime.trainingSymbol.symbol
  );
};

const HistoryItem: React.FC<{ solvingTime: ISolvingTime }> = (props) => {
  return (
    <div
      className={`${styles.historyItem} ${
        props.solvingTime.solutionStatus === SolutionStatus.Successful
          ? styles.historyItemSuccess
          : styles.historyItemFailed
      }`}
    >
      <div className={styles.historyItemSymbol}>
        <h1>{props.solvingTime.trainingSymbol.symbol}</h1>
      </div>
      <div className={styles.historyItemAnswer}>
        {getMappedSymbol(props.solvingTime)}
      </div>
      <div className={styles.historyItemTime}>{props.solvingTime.time} s</div>
      <div className={styles.historyItemNumberSuccessfulAnswers}>
        {props.solvingTime.numberSuccessfulAnswers}x
      </div>
    </div>
  );
};

export default HistoryItem;
