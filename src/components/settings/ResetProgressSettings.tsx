import { useContext } from "react";
import { AppContext } from "../../AppContext";
import Setting from "./Setting";

const ResetProgressSettings: React.FC = () => {
  const context = useContext(AppContext);
  const onReset = () => {
    const needsReset = window.confirm(
      "Do you really want to reset your progress?"
    );

    if (needsReset) {
      context.settings.onResetProgress();
    }
  };
  return (
    <Setting title="Reset Progress">
      <button onClick={onReset}>Reset</button>
    </Setting>
  );
};

export default ResetProgressSettings;
