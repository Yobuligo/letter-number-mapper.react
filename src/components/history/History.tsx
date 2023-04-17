import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import HistoryItem from "./HistoryItem";
import styles from "./History.module.css";

const History: React.FC = () => {
  const context = useContext(AppContext);
  const items = context.exercise.solvingTimes.map((solvingTime) => (
    <HistoryItem key={crypto.randomUUID()} solvingTime={solvingTime} />
  ));

  return (
    <div className={styles.history}>
      <h4>History</h4>
      <div className={styles.items}>{items}</div>
    </div>
  );
};

export default React.memo(History);
