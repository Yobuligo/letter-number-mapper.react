import { ReactNode } from "react";
import styles from "./ProgressIndicator.module.scss";

export const ProgressIndicator: React.FC = () => {
  const labels = ["Section 1", "Section 2", "Section 3", "Section 4"];
  const getMarks = (style: any) => {
    // return labels.map(() => <div className={styles.mark}></div>);
    const nodes: ReactNode[] = [];
    for (let i = 0; i < labels.length + 1; i++) {
      nodes.push(<div className={style}></div>);
    }
    return nodes;
  };
  return (
    <div className={styles.progressIndicator}>
      {getMarks(styles.markTop)}
      <div className={styles.bar}></div>
      <div className={styles.startLabel}>Needs practice</div>
      <div className={`${styles.markFix} ${styles.markFixEnd}`}></div>
      {getMarks(styles.markBottom)}
      <div className={styles.endLabel}>Mastered</div>
      <div className={styles.markFix}></div>
      {labels.map((label) => (
        <div key={label} className={styles.label}>
          {label}
        </div>
      ))}
    </div>
  );
};
