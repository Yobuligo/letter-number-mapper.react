import settingsImage from "../../images/settings.png";
import styles from "./Toolbar.module.css";

const Toolbar: React.FC = () => {
  return (
    <div className={styles.toolbar}>
      <img src={settingsImage} alt="settings" />
    </div>
  );
};

export default Toolbar;
