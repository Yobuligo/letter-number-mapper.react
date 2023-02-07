import Card from "../core/card/Card";
import ExerciseTypeSetting from "./ExerciseTypeSetting";
import FeedbackTimeSetting from "./FeedbackTimeSetting";

const Settings: React.FC = () => {
  return (
    <Card>
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
