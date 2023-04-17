import { useContext, useState } from "react";
import { AppContext } from "../../AppContext";
import Setting from "./Setting";

const SolvingTimeSettings: React.FC = () => {
  const context = useContext(AppContext);
  const [showSolvingTimeList, setShowSolvingTimeList] = useState(
    context.settings.storedParameters.showSolvingTimeList
  );

  const [showSolvingTime, setShowSolvingTime] = useState(
    context.settings.storedParameters.showSolvingTime
  );

  return (
    <Setting title="Solving Time">
      <div>
        <input
          id="showSolvingTimeList"
          type="checkbox"
          checked={showSolvingTimeList}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setShowSolvingTimeList(event.target.checked);
            context.settings.setShowSolvingTimeList(event.target.checked);
          }}
        />
        <label htmlFor="showSolvingTimeList">Display solving time list</label>
      </div>
      <div>
        <input
          id="showSolvingTime"
          type="checkbox"
          checked={showSolvingTime}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setShowSolvingTime(event.target.checked);
            context.settings.setShowSolvingTime(event.target.checked);
          }}
        />
        <label htmlFor="showSolvingTime">Display solving time</label>
      </div>
    </Setting>
  );
};

export default SolvingTimeSettings;
