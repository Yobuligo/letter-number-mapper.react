import { MaterialIcons } from "../../assets/icons/MaterialIcons";

/**
 * This component is responsible for displaying material icons.
 */
const Icon: React.FC<{
  className?: string;
  icon: MaterialIcons;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}> = (props) => {
  return (
    <span
      className={`material-symbols-outlined ${props.className}`}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {props.icon}
    </span>
  );
};

export default Icon;
