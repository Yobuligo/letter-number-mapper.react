import { ReactNode } from "react";
import ModalDialog from "../modalDialog/ModalDialog";
import styles from "./tooltip.module.css";

export const Tooltip: React.FC<{ onHide: () => void; children?: ReactNode }> = (
  props
) => {
  return (
    <ModalDialog visible={true} onConfirm={props.onHide}>
      <div className={styles.tooltip}>
        <div className={styles.triangle}></div>
        <div className={styles.tooltipBody}>{props.children}</div>
      </div>
    </ModalDialog>
  );
};
