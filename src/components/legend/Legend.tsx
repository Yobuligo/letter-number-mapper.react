import { ILegendItem } from "./ILegendItem";
import styles from "./Legend.module.css";
import { LegendItem } from "./LegendItem";

export const Legend: React.FC<{
  legendItems: Array<ILegendItem>;
  className?: string;
}> = (props) => {
  return (
    <div className={`${styles.legend} ${props.className}`}>
      {props.legendItems.map((legendItem, index) => (
        <LegendItem key={index} legendItem={legendItem} />
      ))}
    </div>
  );
};
