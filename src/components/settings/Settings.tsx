import { MaterialIcons } from "../../assets/icons/MaterialIcons";
import { useTranslation } from "../../hooks/useTranslation";
import { IConfirmable } from "../core/IConfirmable";
import Card from "../core/card/Card";
import Icon from "../icon/Icon";
import { Version } from "../version/Version";
import ExerciseTypeSetting from "./ExerciseTypeSetting";
import KeyboardLayoutSetting from "./KeyboardLayoutSetting";
import LanguageSetting from "./LanguageSetting";
import ResetProgressSettings from "./ResetProgressSettings";
import styles from "./Settings.module.css";
import { SolvingTimeListSetting } from "./SolvingTimeListSetting";
import { SolvingTimeSetting } from "./SolvingTimeSetting";

const Settings: React.FC<IConfirmable> = (props) => {
  const { t } = useTranslation();
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>
    event.preventDefault();

  return (
    <Card className={`${styles.card} ${styles.settings}`}>
      <div className={styles.headline}>
        <div className={styles.headlineLeft}>
          <Icon icon={MaterialIcons.ChevronLeft} onClick={props.onConfirm} />
          <h1 onClick={props.onConfirm}>{t.settings.title}</h1>
        </div>
        <Version className={styles.headlineRight} />
      </div>
      <div className={styles.form}>
        <form onSubmit={onSubmit}>
          <ExerciseTypeSetting />
          {/* The feedback settings have no impact with the current css implementation */}
          {/* <FeedbackTimeSetting /> */}
          <SolvingTimeSetting />
          <SolvingTimeListSetting />
          <LanguageSetting />
          <KeyboardLayoutSetting />
          <ResetProgressSettings />
        </form>
      </div>
      <div className={styles.privacyPolicy}>
        <a
          href={process.env.REACT_APP_PRIVACY_POLICY_LINK}
          target="_blank"
          rel="noreferrer"
        >
          {t.settings.dataProtection}
        </a>
      </div>
    </Card>
  );
};

export default Settings;
