import { ReactNode } from "react";
import styles from "./Setting.module.css";

const Setting: React.FC<{
  title: string;
  children: ReactNode;
  className?: string;
}> = (props) => {
  return (
    <div className={`${styles.setting} ${props.className ?? ""}`}>
      <h3>{props.title}</h3>
      <div className={styles.settingContent}>{props.children}</div>
    </div>
  );
};

export default Setting;
