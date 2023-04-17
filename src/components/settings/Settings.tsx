import Card from "../core/card/Card";
import ExerciseTypeSetting from "./ExerciseTypeSetting";
import FeedbackTimeSetting from "./FeedbackTimeSetting";
import ResetProgressSettings from "./ResetProgressSettings";
import styles from "./Settings.module.css";
import { SolvingTimeListSetting } from "./SolvingTimeListSetting";
import { SolvingTimeSetting } from "./SolvingTimeSetting";

const Settings: React.FC = () => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>
    event.preventDefault();
  return (
    <Card className={`${styles.card} ${styles.settings}`}>
      <section>
        <h1>Settings</h1>
        <form onSubmit={onSubmit}>
          <ExerciseTypeSetting />
          <FeedbackTimeSetting />
          <SolvingTimeSetting />
          <SolvingTimeListSetting />
          <ResetProgressSettings />
        </form>
      </section>
    </Card>
  );
};

export default Settings;
