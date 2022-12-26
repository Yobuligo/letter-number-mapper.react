import styles from "./Card.module.css";

const Card: React.FC<{ children: React.ReactNode; className?: string }> = (
  props
) => {
  return (
    <div
      className={
        props.className === undefined
          ? styles.card
          : `${styles.card} ${props.className}`
      }
    >
      {props.children}
    </div>
  );
};

export default Card;
