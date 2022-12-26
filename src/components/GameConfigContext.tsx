import React from "react";
import { Direction } from "../gameConfig/Direction";
import { Mode } from "../gameConfig/Mode";

export const GameConfigContext = React.createContext({
  showResult: false,
  direction: Direction.LETTER_TO_NUMBER,
  mode: Mode.RANDOM,
});
