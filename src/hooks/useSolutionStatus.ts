import { useContext, useEffect, useState } from "react";
import { SolutionStatus } from "../components/exercise/SolutionStatus";
import { AppContext } from "./../AppContext";

export const useSolutionStatus = (onSolutionResetHandler: () => void) => {
  const [solutionStatus, setSolutionStatus] = useState(
    SolutionStatus.NOT_PROVIDED
  );
  let previousSolutionStatus = SolutionStatus.NOT_PROVIDED;
  const context = useContext(AppContext);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (solutionStatus !== SolutionStatus.NOT_PROVIDED) {
      previousSolutionStatus = solutionStatus;
      console.log(`Feedback time ${context.settings.feedbackTime}`);
      const feedbackTime = context.settings.feedbackTime as any;
      timer = setTimeout(() => {
        setSolutionStatus(SolutionStatus.NOT_PROVIDED);
        if (previousSolutionStatus === SolutionStatus.SUCCESSFUL) {
          onSolutionResetHandler();
        }
        previousSolutionStatus = SolutionStatus.NOT_PROVIDED;
      }, feedbackTime[0]);
    }
    return () => clearTimeout(timer);
  }, [solutionStatus]);
  return { solutionStatus, setSolutionStatus };
};
