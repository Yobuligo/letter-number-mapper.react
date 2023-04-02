import { ISolvingTime } from "../../model/ISolvingTime";
import styles from "./SolvingTime.module.css";

const SolvingTime: React.FC<{ solvingTime: ISolvingTime }> = (props) => {
  return (
    <div className={styles.solvingTime}>
      <div className={styles.solvingTimeSymbol}>{props.solvingTime.symbol}</div>
      <div>{props.solvingTime.time}</div>
    </div>
  );
};

export default SolvingTime;
