import { useContext, useEffect, useState } from "react";
import { SolutionStatus } from "../components/exercise/SolutionStatus";
import { AppContext } from "./../AppContext";

export const useSolutionStatus = (onSolutionResetHandler: () => void) => {
  const [solutionStatus, setSolutionStatus] = useState(
    SolutionStatus.NotProvided
  );
  let previousSolutionStatus = SolutionStatus.NotProvided;
  const context = useContext(AppContext);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (solutionStatus !== SolutionStatus.NotProvided) {
      previousSolutionStatus = solutionStatus;
      console.log(
        `Feedback time ${context.settings.storedParameters.feedbackTime}`
      );
      const feedbackTime = context.settings.storedParameters
        .feedbackTime as any;
      timer = setTimeout(() => {
        setSolutionStatus(SolutionStatus.NotProvided);
        if (
          previousSolutionStatus === SolutionStatus.Successful ||
          previousSolutionStatus === SolutionStatus.Failed
        ) {
          onSolutionResetHandler();
        }
        previousSolutionStatus = SolutionStatus.NotProvided;
      }, feedbackTime);
    }
    return () => clearTimeout(timer);
  }, [solutionStatus]);
  return { solutionStatus, setSolutionStatus };
};
