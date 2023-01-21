import { ReactNode } from "react";
import styles from "./ModalDialog.module.css";

const ModalDialog: React.FC<{
  className?: string;
  children: ReactNode;
  onConfirm?: () => void;
}> = (props) => {
  return (
    <>
      <div className={styles.backdrop} onClick={props.onConfirm}></div>
      <div
        className={
          props.className !== undefined
            ? `${props.className} ${styles.modalDialog}`
            : styles.modalDialog
        }
      >
        {props.children}
      </div>
    </>
  );
};

export default ModalDialog;
