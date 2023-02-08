import { useContext } from "react";
import { AppContext } from "../../AppContext";
import styles from "./Bottom.module.css";

const Bottom: React.FC = () => {
  const context = useContext(AppContext);
  return (
    <div className={styles.bottom}>
      {context.exercise.solvingTime
        ? `${context.exercise.solvingTime} seconds`
        : ""}
    </div>
  );
};

export default Bottom;
