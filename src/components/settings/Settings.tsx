import Card from "../core/card/Card";
import ExerciseTypeSetting from "./ExerciseTypeSetting";
import FeedbackTimeSetting from "./FeedbackTimeSetting";
import styles from "./Settings.module.css";
import SolvingTimeSettings from "./SolvingTimeSettings";

const Settings: React.FC = () => {
  return (
    <Card className={styles.settings}>
      <section>
        <form>
          <ExerciseTypeSetting />
          <FeedbackTimeSetting />
          <SolvingTimeSettings />
        </form>
      </section>
    </Card>
  );
};

export default Settings;
