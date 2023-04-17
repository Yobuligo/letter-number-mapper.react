import React from "react";
import { Exercise } from "../exercise/Exercise";
import { ExerciseType } from "../exercise/ExerciseType";
import SolvingTime from "../solvingTime/SolvingTime";

export const Display: React.FC<{
  symbol: string;
  exerciseType: ExerciseType;
  className?: string;
}> = (props) => {
  return (
    <div className={props.className}>
      <Exercise symbol={props.symbol} />
      <SolvingTime />
    </div>
  );
};
