import { ReactNode } from "react";
import styles from "./Setting.module.css";

const Setting: React.FC<{ title: string; children: ReactNode }> = (props) => {
  return (
    <>
      <h3>{props.title}</h3>
      <div className={styles.setting}>{props.children}</div>
    </>
  );
};

export default Setting;
