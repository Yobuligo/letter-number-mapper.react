import { ReactNode } from "react";
import styles from "./Card.module.css";

const Card: React.FC<{ className?: string; children: ReactNode }> = (props) => {
  return (
    <div
      className={
        props.className !== undefined
          ? `${props.className} ${styles.card}`
          : styles.card
      }
    >
      {props.children}
    </div>
  );
};

export default Card;
