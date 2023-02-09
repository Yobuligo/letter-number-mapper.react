import { useState } from "react";

const useStopwatch = () => {
  const [startTime, setStartTime] = useState<Date>();
  const [stopTime, setStopTime] = useState<Date>();
  return {
    start: () => {
      setStartTime(new Date());
    },
    stop: () => {
      setStopTime(new Date());
    },
    getElapsed: (): number => {
      if (startTime === undefined) {
        return 0;
      }
      const date = stopTime ?? new Date();
      return date.getTime() - startTime.getTime();
    },
    reset: () => {
      setStartTime(undefined);
      setStopTime(undefined);
    },
  };
};

export default useStopwatch;
