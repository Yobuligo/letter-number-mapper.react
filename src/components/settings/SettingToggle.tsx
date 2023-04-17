import { Switch } from "@mui/material";
import Setting from "./Setting";

export const SettingToggle: React.FC<{
  title: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}> = (props) => {
  return (
    <Setting title={props.title}>
      <Switch
        defaultChecked
        size="small"
        onChange={props.onChange}
        checked={props.checked}
      />
    </Setting>
  );
};
