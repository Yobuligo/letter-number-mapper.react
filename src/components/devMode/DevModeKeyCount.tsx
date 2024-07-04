import { useContext } from "react";
import { AppContext } from "../../AppContext";
import styles from "./DevModeKeyCount.module.scss";

export const DevModeKeyCount: React.FC<{ symbol: string }> = (props) => {
  const context = useContext(AppContext);
  return (
    <div className={styles.count}>
      {context.devMode.findPickedSymbolCount(props.symbol)}
    </div>
  );
};
