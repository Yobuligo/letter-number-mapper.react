import { MaterialIcons } from "../../assets/icons/MaterialIcons";

interface IToolbarAction {
  icon: MaterialIcons;
  text: string;
  onClickHandler?: () => void;
}

export default IToolbarAction;
