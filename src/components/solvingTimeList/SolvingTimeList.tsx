import { useContext, useMemo } from "react";
import { AppContext } from "../../AppContext";
import { UUIDGenerator } from "../../services/UUIDGenerator/UUIDGenerator";
import SolvingTime from "./SolvingTime";
import styles from "./SolvingTimeList.module.css";

const SolvingTimeList: React.FC = () => {
  const context = useContext(AppContext);
  const uuidGenerator = useMemo(() => new UUIDGenerator(), []);
  const items = context.exercise.solvingTimes.map((solvingTime) => {
    return <SolvingTime key={uuidGenerator.next} solvingTime={solvingTime} />;
  });
  return (
    <div className={styles.solvingTimeList}>
      <h4>Solving Time in seconds</h4>
      <div>{items}</div>
    </div>
  );
};

export default SolvingTimeList;
