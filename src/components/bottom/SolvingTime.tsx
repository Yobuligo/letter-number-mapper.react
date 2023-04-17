import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { SolutionStatus } from "../exercise/SolutionStatus";
import styles from "./SolvingTime.module.css";

const SolvingTime: React.FC = () => {
  const context = useContext(AppContext);
  return (
    <>
      {context.settings.storedParameters.showSolvingTime && (
        <div className={styles.bottom}>
          {context.exercise.solutionStatus === SolutionStatus.SUCCESSFUL
            ? `${context.stopwatch.elapsed} seconds`
            : ""}
        </div>
      )}
    </>
  );
};

export default SolvingTime;
