import { useContext } from "react";
import { AppContext } from "../../AppContext";
import SolvingTime from "./SolvingTime";
import styles from "./SolvingTimeList.module.css";

const SolvingTimeList: React.FC = () => {
  const context = useContext(AppContext);
  const items = context.exercise.solvingTimes.map((solvingTime) => {
    return <SolvingTime key={solvingTime} solvingTime={solvingTime} />;
  });
  return <div className={styles.solvingTimeList}>
    <h4>Solving Time in seconds</h4>
    <div>{items}</div>
  </div>;
};

export default SolvingTimeList;
