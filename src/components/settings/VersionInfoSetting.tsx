import { useTranslation } from "../../hooks/useTranslation";
import Setting from "./Setting";

export const VersionInfoSetting: React.FC = () => {
  const { t } = useTranslation();

  return <Setting title={t.settings.version}>1.0.0</Setting>;
};
