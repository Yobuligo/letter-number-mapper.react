interface IToolbarAction {
  source: string;
  text: string;
  onClickHandler?: () => void;
}

export default IToolbarAction;
