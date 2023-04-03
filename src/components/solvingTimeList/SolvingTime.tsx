import { ISolvingTime } from "../../model/ISolvingTime";
import styles from "./SolvingTime.module.css";

const SolvingTime: React.FC<{ solvingTime: ISolvingTime }> = (props) => {
  return (
    <div className={styles.solvingTime}>
      <div className={styles.solvingTimeSymbol}><h1>{props.solvingTime.symbol}</h1></div>
      <div className={styles.solvingTimeTime}>{props.solvingTime.time}s</div>
    </div>
  );
};

export default SolvingTime;
