import { useContext, useState } from "react";
import { AppContext } from "../../AppContext";
import { useTranslation } from "../../hooks/useTranslation";
import { SettingToggle } from "./SettingToggle";

export const SolvingTimeSetting: React.FC = () => {
  const { t } = useTranslation();
  const context = useContext(AppContext);

  const [showSolvingTime, setShowSolvingTime] = useState(
    context.settings.storedParameters.showSolvingTime
  );

  return (
    <SettingToggle
      title={t.settings.displaySolvingTime}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setShowSolvingTime(event.target.checked);
        context.settings.setShowSolvingTime(event.target.checked);
      }}
      checked={showSolvingTime}
    />
  );
};
