import { ILegendItem } from "./ILegendItem";
import styles from "./LegendItem.module.css";

export const LegendItem: React.FC<{ legendItem: ILegendItem }> = (props) => {
  return (
    <>
      <div
        className={styles.colorBlock}
        style={{ backgroundColor: props.legendItem.color }}
      ></div>
      <div className={styles.label}>{props.legendItem.label}</div>
    </>
  );
};
