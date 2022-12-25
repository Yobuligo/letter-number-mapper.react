import styles from "./Menu.module.css";

const Menu: React.FC<{
  onSetupGame?: () => void;
}> = (props) => {
  return (
    <div className={styles.menu}>
      <button type="button" onClick={props.onSetupGame}>
        Setup Game
      </button>
    </div>
  );
};

export default Menu;
