import Card from "../core/card/Card";
import ExerciseTypeSetting from "./ExerciseTypeSetting";
import FeedbackTimeSetting from "./FeedbackTimeSetting";
import styles from "./Settings.module.css";

const Settings: React.FC = () => {
  return (
    <Card className={styles.settings}>
      <section>
        <form>
          <ExerciseTypeSetting />
          <FeedbackTimeSetting />
        </form>
      </section>
    </Card>
  );
};

export default Settings;
