import { Switch, styled } from "@mui/material";
import { useMemo } from "react";
import colors from "../../styles/global/colors.module.scss";
import Setting from "./Setting";

export const SettingToggle: React.FC<{
  title: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}> = (props) => {
  const primaryColor = colors.primaryColor;

  const CustomSwitch = useMemo(
    () =>
      styled(Switch)({
        "& .MuiSwitch-switchBase.Mui-checked": {
          color: primaryColor,
        },
        "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
          backgroundColor: primaryColor,
        },
      }),
    [primaryColor]
  );

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
