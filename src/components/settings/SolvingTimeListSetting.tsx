import { useContext, useState } from "react";
import { SettingToggle } from "./SettingToggle";
import { AppContext } from "../../AppContext";
import { useTranslation } from "../../hooks/useTranslation";

export const SolvingTimeListSetting: React.FC = () => {
  const { t } = useTranslation()
  const context = useContext(AppContext);
  const [showSolvingTimeList, setShowSolvingTimeList] = useState(
    context.settings.storedParameters.showSolvingTimeList
  );

  return (
    <SettingToggle
      title={t.settings.displayHistory}
      checked={showSolvingTimeList}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setShowSolvingTimeList(event.target.checked);
        context.settings.setShowSolvingTimeList(event.target.checked);
      }}
    />
  );
};
