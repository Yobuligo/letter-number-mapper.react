import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext";
import { SolutionStatus } from "../exercise/SolutionStatus";
import styles from "./SolvingTime.module.css";

const SolvingTime: React.FC = () => {
  const [solvingTime, setSolvingTime] = useState(0);
  const context = useContext(AppContext);
  useEffect(() => {
    if (context.exercise.solutionStatus === SolutionStatus.SUCCESSFUL) {
      setSolvingTime(context.stopwatch.elapsed);
    }
  }, [context.exercise.solutionStatus, context.stopwatch.elapsed]);

  return (
    <div className={styles.solvingTime}>
      {context.settings.storedParameters.showSolvingTime && (
        <div>{`${solvingTime} s`}</div>
      )}
    </div>
  );
};

export default SolvingTime;
