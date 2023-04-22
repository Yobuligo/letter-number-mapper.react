import { Mark } from "@mui/base";
import { Slider, styled } from "@mui/material";
import { useContext, useState } from "react";
import { AppContext } from "../../AppContext";
import { FeedbackTime } from "./FeedbackTime";
import Setting from "./Setting";
import styles from "./FeedbackTimeSetting.module.css";

const FeedbackTimeSetting: React.FC = () => {
  const context = useContext(AppContext);
  const [primaryColor] = useState(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--primaryColor"
    )
  );
  const CustomSlider = styled(Slider)({
    color: primaryColor,
    height: 8,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 16,
      width: 16,
      // backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
  });
  const buildMarks = (): Mark[] => {
    const marks: Mark[] = [];
    const entries = Object.entries(FeedbackTime);
    for (let i = 0; i < Math.round(entries.length / 2); i++) {
      marks.push({
        value: Number(entries[i][0]),
        label: entries[i][1].toString().toLowerCase(),
      });
    }
    return marks;
  };

  const marks = buildMarks();

  const findFeedbackTimeByValue = (value: number): FeedbackTime => {
    const element = Object.entries(FeedbackTime).find((element) => {
      return element[0] === value.toString();
    });
    return element as unknown as FeedbackTime;
  };

  const getDefaultValue = (): number => {
    const feedbackTime =
      context.settings.storedParameters.feedbackTime ?? findFirst();
    const defaultValue = feedbackTime as any;
    return Number(defaultValue[0]);
  };

  const findFirst = (): number => {
    const first = (Object.entries(FeedbackTime).at(0) as any)[0];
    return first;
  };

  return (
    <Setting title="Feedback Time">
      <CustomSlider
        className={styles.slider}
        defaultValue={getDefaultValue()}
        step={marks[0].value}
        min={marks[0].value}
        max={marks[marks.length - 1].value}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={(event: Event, value) => {
          let selectedValue: number;
          if (typeof value === "number") {
            selectedValue = value;
          } else {
            selectedValue = value[0];
          }
          context.settings.setFeedbackTime(
            findFeedbackTimeByValue(selectedValue)
          );
        }}
      />
    </Setting>
  );
};

export default FeedbackTimeSetting;
