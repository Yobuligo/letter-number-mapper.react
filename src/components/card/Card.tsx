import styles from "./Card.module.css";

const Card: React.FC<{ children: React.ReactNode; className?: string }> = (
  props
) => {
  const classname =
    props.className === undefined
      ? styles.card
      : `${styles.card} ${props.className}`;
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
