import React, { ReactNode, useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext";
import SolvingTime from "./SolvingTime";
import styles from "./SolvingTimeList.module.css";

const SolvingTimeList: React.FC = () => {
  const context = useContext(AppContext);
  const [items, setItems] = useState<ReactNode>();
  useEffect(() => {
    setItems(() =>
      context.exercise.solvingTimes.map((solvingTime) => (
        <SolvingTime key={crypto.randomUUID()} solvingTime={solvingTime} />
      ))
    );
  }, [context.exercise.solvingTimes, context.exercise.solvingTimes.length]);

  return (
    <div className={styles.solvingTimeList}>
      <h4>Solving Time</h4>
      <div className={styles.items}>{items}</div>
    </div>
  );
};

export default React.memo(SolvingTimeList);
