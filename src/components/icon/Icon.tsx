import { MaterialIcons } from "../../assets/icons/MaterialIcons";

const Icon: React.FC<{ className?: string; icon: MaterialIcons }> = (props) => {
  return <span className="material-symbols-outlined">{props.icon}</span>;
};

export default Icon;
