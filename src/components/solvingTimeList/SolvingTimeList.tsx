import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import SolvingTime from "./SolvingTime";
import styles from "./SolvingTimeList.module.css";

const SolvingTimeList: React.FC = () => {
  const context = useContext(AppContext);
  const items = context.exercise.solvingTimes.map((solvingTime) => {
    return <SolvingTime key={crypto.randomUUID()} solvingTime={solvingTime} />;
  });

  return (
    <div className={styles.solvingTimeList}>
      <h4>Solving Time</h4>
      <div className={styles.items}>{items}</div>
    </div>
  );
};

export default React.memo(SolvingTimeList);
