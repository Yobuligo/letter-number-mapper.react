import { MaterialIcons } from "../../assets/icons/MaterialIcons";

const Icon: React.FC<{
  className?: string;
  icon: MaterialIcons;
  onClick?: () => void;
}> = (props) => {
  return (
    <span
      className={`material-symbols-outlined ${props.className}`}
      onClick={props.onClick}
    >
      {props.icon}
    </span>
  );
};

export default Icon;
