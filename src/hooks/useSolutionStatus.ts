import { useEffect, useState } from "react";
import { SolutionStatus } from "../components/exercise/SolutionStatus";

export const useSolutionStatus = (onSolutionResetHandler: () => void) => {
  const [solutionStatus, setSolutionStatus] = useState(
    SolutionStatus.NOT_PROVIDED
  );
  let previousSolutionStatus = SolutionStatus.NOT_PROVIDED;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (solutionStatus !== SolutionStatus.NOT_PROVIDED) {
      previousSolutionStatus = solutionStatus;
      timer = setTimeout(() => {
        setSolutionStatus(SolutionStatus.NOT_PROVIDED);
        if (previousSolutionStatus === SolutionStatus.SUCCESSFUL) {
          onSolutionResetHandler();
        }
        previousSolutionStatus = SolutionStatus.NOT_PROVIDED;
      }, 300);
    }
    return () => clearTimeout(timer);
  }, [solutionStatus]);
  return { solutionStatus, setSolutionStatus };
};
