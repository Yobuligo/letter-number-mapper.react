import styles from "./Menu.module.css";

const Menu: React.FC<{
  onSetupGame?: () => void;
  onStartGame?: () => void;
}> = (props) => {
  return (
    <div className={styles.menu}>
      <button type="button" onClick={props.onSetupGame}>
        Setup Game
      </button>
      <button type="button" onClick={props.onStartGame}>
        Start Game
      </button>
    </div>
  );
};

export default Menu;
