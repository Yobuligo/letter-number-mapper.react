import { Mark } from "@mui/base";
import { Slider } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { FeedbackTime } from "./FeedbackTime";
import Setting from "./Setting";

const FeedbackTimeSetting: React.FC = () => {
  const context = useContext(AppContext);
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
    return context.settings.storedParameters.feedbackTime ?? findFirst()
  };

  const findFirst = (): number => {
    const first = (Object.entries(FeedbackTime).at(0) as any)[0];
    return first;
  };

  return (
    <Setting title="Feedback Time">
      <Slider
        defaultValue={getDefaultValue()}
        step={marks[0].value}
        min={marks[0].value}
        max={marks[marks.length - 1].value}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={(event: Event, value) => {
          context.settings.setFeedbackTime(
            findFeedbackTimeByValue(value as number)
          );
        }}
      />
    </Setting>
  );
};

export default FeedbackTimeSetting;
