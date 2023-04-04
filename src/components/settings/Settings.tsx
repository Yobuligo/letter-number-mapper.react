import Card from "../core/card/Card";
import ExerciseTypeSetting from "./ExerciseTypeSetting";
import FeedbackTimeSetting from "./FeedbackTimeSetting";
import ResetProgressSettings from "./ResetProgressSettings";
import styles from "./Settings.module.css";
import SolvingTimeSettings from "./SolvingTimeSettings";

const Settings: React.FC = () => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>
    event.preventDefault();
  return (
    <Card className={styles.settings}>
      <section>
        <form onSubmit={onSubmit}>
          <ExerciseTypeSetting />
          <FeedbackTimeSetting />
          <SolvingTimeSettings />
          <ResetProgressSettings />
        </form>
      </section>
    </Card>
  );
};

export default Settings;
