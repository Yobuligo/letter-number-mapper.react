import { useContext, useState } from "react";
import { SettingToggle } from "./SettingToggle";
import { AppContext } from "../../AppContext";

export const SolvingTimeListSetting: React.FC = () => {
  const context = useContext(AppContext);
  const [showSolvingTimeList, setShowSolvingTimeList] = useState(
    context.settings.storedParameters.showSolvingTimeList
  );

  return (
    <SettingToggle
      title="Display History"
      checked={showSolvingTimeList}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setShowSolvingTimeList(event.target.checked);
        context.settings.setShowSolvingTimeList(event.target.checked);
      }}
    />
  );
};
