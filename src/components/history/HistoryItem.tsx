import { MaterialIcons } from "../../assets/icons/MaterialIcons";
import { ISolvingTime } from "../../model/ISolvingTime";
import { SymbolMapperInfo } from "../../services/symbolMapper/SymbolMapperInfo";
import { SolutionStatus } from "../exercise/SolutionStatus";
import Icon from "../icon/Icon";
import styles from "./HistoryItem.module.css";

const getMappedSymbol = (solvingTime: ISolvingTime): string => {
  return SymbolMapperInfo.get(solvingTime.exerciseType).map(
    solvingTime.trainingSymbol.symbol
  );
};

const HistoryItem: React.FC<{ solvingTime: ISolvingTime }> = (props) => {
  const statusClassName = `${styles.historyItem} ${
    props.solvingTime.solutionStatus === SolutionStatus.Successful
      ? styles.historyItemSuccess
      : styles.historyItemFailed
  }`;
  return (
    <div className={styles.historyItemLayout}>
      <div className={styles.joinedRows}>
        <h1 className={statusClassName}>
          {props.solvingTime.trainingSymbol.symbol}
        </h1>
        <Icon icon={MaterialIcons.AdsClick} />
        <h2>n/a</h2>
      </div>
      <div className={styles.joinedRows}>
        <Icon icon={MaterialIcons.Quiz} />
        <h2>{getMappedSymbol(props.solvingTime)}</h2>
      </div>
      <Icon icon={MaterialIcons.StackedTicks} />
      <h3>{props.solvingTime.numberSuccessfulAnswers}x</h3>
      <Icon icon={MaterialIcons.Clock} />
      <h3>{props.solvingTime.time} s</h3>
    </div>
  );
};

export default HistoryItem;
