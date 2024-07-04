import { ReactNode } from "react";
import styles from "./Card.module.scss";

const Card: React.FC<{ className?: string; children: ReactNode }> = (props) => {
  return (
    <div
      className={
        props.className !== undefined
          ? `${styles.card} ${props.className}`
          : styles.card
      }
    >
      {props.children}
    </div>
  );
};

export default Card;
