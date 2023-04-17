import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { SolutionStatus } from "../exercise/SolutionStatus";
import styles from "./SolvingTime.module.css";

const SolvingTime: React.FC = () => {
  const context = useContext(AppContext);
  return (
    <div className={styles.solvingTime}>
      {context.settings.storedParameters.showSolvingTime && (
        <div>
          {context.exercise.solutionStatus === SolutionStatus.SUCCESSFUL
            ? `${context.stopwatch.elapsed} s`
            : ""}
        </div>
      )}
    </div>
  );
};

export default SolvingTime;
