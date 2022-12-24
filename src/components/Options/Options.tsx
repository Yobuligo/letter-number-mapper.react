import Card from "../card/Card";
import DirectionOptions from "./DirectionOptions";
import ModeOptions from "./ModeOptions";
import styles from "./Options.module.css";
import OthersOptions from "./OthersOptions";

const Options: React.FC = () => {
  return (
    <div className={styles.options}>
      <Card>
        <DirectionOptions />
        <ModeOptions />
        <OthersOptions />
      </Card>
    </div>
  );
};

export default Options;
