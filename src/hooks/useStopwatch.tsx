import { useState } from "react";

const useStopwatch = () => {
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState<Date>();
};

export default useStopwatch;
