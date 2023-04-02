import IToolbarAction from "./IToolbarAction";
import styles from "./Toolbar.module.css";

const Toolbar: React.FC<{ toolbarActions?: IToolbarAction[] }> = (props) => {
  const items = props.toolbarActions?.map((toolbarAction) => {
    return (
      <button key={toolbarAction.source} onClick={toolbarAction.onClickHandler}>
        <span className="material-symbols-outlined">menu</span>
      </button>
    );
  });
  return <div className={styles.toolbar}>{items}</div>;
};

export default Toolbar;
