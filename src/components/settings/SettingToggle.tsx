import { Switch, styled } from "@mui/material";
import Setting from "./Setting";

const primaryColor = "#642472";
const CustomSwitch = styled(Switch)({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: primaryColor,
  },
  "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
    backgroundColor: primaryColor,
  },
});

export const SettingToggle: React.FC<{
  title: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}> = (props) => {
  return (
    <Setting title={props.title}>
      <CustomSwitch
        size="small"
        onChange={props.onChange}
        checked={props.checked}
      />
    </Setting>
  );
};
