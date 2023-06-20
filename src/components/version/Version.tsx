import { useAppMeta } from "../../hooks/useAppMeta";
import { style } from "../../utils/style";
import styles from "./Version.module.css";

export const Version: React.FC<{ className?: string }> = (props) => {
  const appMeta = useAppMeta();
  return (
    <div className={style(styles.version, props.className)}>
      {appMeta.version}
    </div>
  );
};
