import { useContext, useState } from "react";
import { AppContext } from "../../AppContext";
import Setting from "./Setting";

const SolvingTimeSettings: React.FC = () => {
  const context = useContext(AppContext);
  const [showSolvingTimeList, setShowSolvingTimeList] = useState(
    context.settings.storedParameters.showSolvingTimeList
  );

  return (
    <Setting title="Solving Time">
      <label htmlFor="showSolvingTimeList">Display solving time list</label>
      <input
        id="showSolvingTimeList"
        type="checkbox"
        checked={showSolvingTimeList}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setShowSolvingTimeList(event.target.checked);
          context.settings.setShowSolvingTimeList(event.target.checked);
        }}
      />
    </Setting>
  );
};

export default SolvingTimeSettings;
