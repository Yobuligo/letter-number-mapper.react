import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { SolutionStatus } from "../exercise/SolutionStatus";
import styles from "./Bottom.module.css";

const Bottom: React.FC = () => {
  const context = useContext(AppContext);
  return (
    <div className={styles.bottom}>
      {context.exercise.solutionStatus === SolutionStatus.SUCCESSFUL
        ? `${context.stopwatch.elapsed} seconds`
        : ""}
    </div>
  );
};

export default Bottom;
