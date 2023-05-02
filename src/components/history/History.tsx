import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { MaterialIcons } from "../../assets/icons/MaterialIcons";
import { useTranslation } from "../../hooks/useTranslation";
import Icon from "../icon/Icon";
import styles from "./History.module.css";
import HistoryItem from "./HistoryItem";

const History: React.FC = () => {
  const { t } = useTranslation();
  const context = useContext(AppContext);
  const items = context.exercise.solvingTimes.map((solvingTime) => (
    <HistoryItem key={crypto.randomUUID()} solvingTime={solvingTime} />
  ));

  return (
    <div className={styles.history}>
      <div className={styles.headline}>
        <h4>{t.history.title}</h4>
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
