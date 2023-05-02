import { MaterialIcons } from "../../assets/icons/MaterialIcons";
import { IConfirmable } from "../core/IConfirmable";
import Card from "../core/card/Card";
import Icon from "../icon/Icon";
import ExerciseTypeSetting from "./ExerciseTypeSetting";
import FeedbackTimeSetting from "./FeedbackTimeSetting";
import LanguageSetting from "./LanguageSetting";
import ResetProgressSettings from "./ResetProgressSettings";
import styles from "./Settings.module.css";
import { SolvingTimeListSetting } from "./SolvingTimeListSetting";
import { SolvingTimeSetting } from "./SolvingTimeSetting";

const Settings: React.FC<IConfirmable> = (props) => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>
    event.preventDefault();

  return (
    <Card className={`${styles.card} ${styles.settings}`}>
      <div className={styles.headline}>
        <Icon icon={MaterialIcons.ChevronLeft} onClick={props.onConfirm} />
        <h1 onClick={props.onConfirm}>Settings</h1>
      </div>
      <div className={styles.form}>
        <form onSubmit={onSubmit}>
          <ExerciseTypeSetting />
          <FeedbackTimeSetting />
          <SolvingTimeSetting />
          <SolvingTimeListSetting />
          <LanguageSetting />
          <ResetProgressSettings />
        </form>
      </div>
    </Card>
  );
};

export default Settings;
