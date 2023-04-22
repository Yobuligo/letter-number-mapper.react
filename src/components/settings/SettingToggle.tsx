import { Switch, styled } from "@mui/material";
import { useState } from "react";
import Setting from "./Setting";

export const SettingToggle: React.FC<{
  title: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}> = (props) => {
  const [primaryColor] = useState(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--primaryColor"
    )
  );

  const CustomSwitch = styled(Switch)({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: primaryColor,
    },
    "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
      backgroundColor: primaryColor,
    },
  });

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
