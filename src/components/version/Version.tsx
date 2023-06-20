import { style } from "../../utils/style";
import styles from "./Version.module.css";

export const Version: React.FC<{ className?: string }> = (props) => {
  return <div className={style(styles.version, props.className)}>1.0.0</div>;
};
