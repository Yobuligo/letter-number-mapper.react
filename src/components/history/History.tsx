import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { MaterialIcons } from "../../assets/icons/MaterialIcons";
import styles from "./History.module.css";
import HistoryItem from "./HistoryItem";

const History: React.FC = () => {
  const context = useContext(AppContext);
  const items = context.exercise.solvingTimes.map((solvingTime) => (
    <HistoryItem key={crypto.randomUUID()} solvingTime={solvingTime} />
  ));

  return (
    <div className={styles.history}>
      <div className={styles.headline}>
        <h4>History</h4>
        <span className="material-symbols-outlined">
          {MaterialIcons.Delete}
        </span>
      </div>
      <div className={styles.items}>{items}</div>
    </div>
  );
};

export default React.memo(History);
