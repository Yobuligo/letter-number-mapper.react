import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { MaterialIcons } from "../../assets/icons/MaterialIcons";
import Icon from "../icon/Icon";
import styles from "./History.module.css";
import HistoryItem from "./HistoryItemGrid";
import HistoryItemGrid from "./HistoryItemGrid";

const History: React.FC = () => {
  const context = useContext(AppContext);
  const items = context.exercise.solvingTimes.map((solvingTime) => (
    <HistoryItemGrid key={crypto.randomUUID()} solvingTime={solvingTime} />
    // <HistoryItem key={crypto.randomUUID()} solvingTime={solvingTime} />
  ));

  return (
    <div className={styles.history}>
      <div className={styles.headline}>
        <h4>History</h4>
        <Icon
          icon={MaterialIcons.Delete}
          onClick={context.exercise.resetSolvingTimes}
        />
      </div>
      <div className={styles.items}>{items}</div>
    </div>
  );
};

export default React.memo(History);
