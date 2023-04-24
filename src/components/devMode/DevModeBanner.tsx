import { useContext, useEffect, useState } from "react";
import styles from "./DevModeBanner.module.css";
import { AppContext } from "../../AppContext";

export const DevModeBanner: React.FC = () => {
  const context = useContext(AppContext);

  const [devModeTriggerCounter, setDevModeTriggerCounter] = useState(0);
  useEffect(() => {
    if (devModeTriggerCounter === 3) {
      context.devMode.devModeActive
        ? context.devMode.setDevModeActive(false)
        : context.devMode.setDevModeActive(true);
      setDevModeTriggerCounter(0);
      return;
    }
    const timeout = setTimeout(() => {
      setDevModeTriggerCounter(0);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [devModeTriggerCounter]);

  return (
    <h1
      className={`${styles.banner} ${
        context.devMode.devModeActive ? styles.visible : ""
      }`}
      onClick={() => setDevModeTriggerCounter((prev) => prev + 1)}
    >
      DevMode
    </h1>
  );
};
