import styles from "./ModeOptions.module.css";

const ModeOptions: React.FC = () => {    
  return (
    <div className={styles.modeOptions}>
      <h3>Mode</h3>
      <div>
        <input type="radio" name="mode" checked />
        <label htmlFor="random">Random</label>
      </div>
      <div>
        <input type="radio" name="mode" />
        <label htmlFor="Ascending">Ascending</label>
      </div>
    </div>
  );
};

export default ModeOptions;
