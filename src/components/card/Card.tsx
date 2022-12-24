import styles from "./Card.module.css";

const Card: React.FC<{ children: React.ReactNode }> = (props) => {
  return <div className={styles.card}>{props.children}</div>;
};

export default Card;
