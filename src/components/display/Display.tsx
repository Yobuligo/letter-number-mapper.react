import React from "react";
import { Exercise } from "../exercise/Exercise";
import { ExerciseType } from "../exercise/ExerciseType";

export const Display: React.FC<{
  symbol: string;
  exerciseType: ExerciseType;
}> = (props) => {
  return <Exercise symbol={props.symbol} />;
};
