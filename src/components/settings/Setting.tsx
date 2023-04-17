import { ReactNode } from "react";
import styles from "./Setting.module.css";

const Setting: React.FC<{
  title: string;
  children: ReactNode;
}> = (props) => {
  return (
    <div className={styles.setting}>
      <h3>{props.title}</h3>
      <div className={styles.settingContent}>{props.children}</div>
    </div>
  );
};

export default Setting;
