import { ReactNode } from "react";
import styles from "./tooltip.module.css";
import ModalDialog from "../modalDialog/ModalDialog";

export const Tooltip: React.FC<{ onHide: () => void; children?: ReactNode }> = (
  props
) => {
  return (
    <>
      <div className={styles.tooltip}>
        <div className={styles.triangle}></div>
        <div className={styles.tooltipBody}>{props.children}</div>
      </div>
    </>
  );
};
