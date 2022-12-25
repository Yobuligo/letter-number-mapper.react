import { GameConfig } from "../../gameConfig/GameConfig";
import Card from "../card/Card";
import DirectionOptions from "./DirectionOptions";
import ModeOptions from "./ModeOptions";
import styles from "./Options.module.css";
import { OptionsChangedHandler } from "./OptionsChangedHandler";
import OthersOptions from "./OthersOptions";

const Options: React.FC<{ onOptionsChanged?: OptionsChangedHandler }> = (
  props
) => {
  const onOptionsChangedHandler = () => {
    props.onOptionsChanged?.(GameConfig);
  };

  return (
    <Card className={styles.options}>
      <DirectionOptions onOptionsChanged={onOptionsChangedHandler} />
      <ModeOptions onOptionsChanged={onOptionsChangedHandler} />
      <OthersOptions onOptionsChanged={onOptionsChangedHandler} />
    </Card>
  );
};

export default Options;
