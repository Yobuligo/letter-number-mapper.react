import { ReactNode } from "react";
import styles from "./ModalDialog.module.css";

const ModalDialog: React.FC<{
  className?: string;
  children: ReactNode;
  onConfirm?: () => void;
}> = (props) => {
  return (
    <div className={styles.modalDialogContainer}>
      <div className={styles.backdrop} onClick={props.onConfirm}></div>
      <div className={styles.modalDialog}>{props.children}</div>
    </div>
  );
};

export default ModalDialog;
