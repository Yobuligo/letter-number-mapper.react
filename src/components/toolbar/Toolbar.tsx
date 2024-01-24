import Icon from "../icon/Icon";
import IToolbarAction from "./IToolbarAction";
import styles from "./Toolbar.module.css";

const Toolbar: React.FC<{ toolbarActions?: IToolbarAction[] }> = (props) => {
  const items = props.toolbarActions?.map((toolbarAction) => {
    return (
      <button key={toolbarAction.icon} onClick={toolbarAction.onClickHandler}>
        <Icon icon={toolbarAction.icon} className={styles.icon} />
      </button>
    );
  });
  return <div className={styles.toolbar}>{items}</div>;
};

export default Toolbar;
