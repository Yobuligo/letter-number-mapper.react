import { useContext, useState } from "react";
import { SettingToggle } from "./SettingToggle";
import { AppContext } from "../../AppContext";

export const SolvingTimeSetting: React.FC = () => {
  const context = useContext(AppContext);

  const [showSolvingTime, setShowSolvingTime] = useState(
    context.settings.storedParameters.showSolvingTime
  );

  return (
    <SettingToggle
      title="Display solving time"
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setShowSolvingTime(event.target.checked);
        context.settings.setShowSolvingTime(event.target.checked);
      }}
      checked={showSolvingTime}
    />
  );
};
