import { ReactNode } from "react";
import styles from "./ModalDialog.module.css";

const ModalDialog: React.FC<{
  className?: string;
  children: ReactNode;
  onConfirm?: () => void;
  visible?: boolean;
}> = (props) => {
  return (
    <div className={styles.modalDialogContainer}>
      {props.visible && (
        <div className={styles.backdrop} onClick={props.onConfirm}></div>
      )}
      <div
        className={`${styles.modalDialog} ${
          props.visible ? styles.modalDialogVisible : ""
        }`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default ModalDialog;
