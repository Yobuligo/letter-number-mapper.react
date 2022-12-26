import React from "react";
import { Direction } from "../gameConfig/Direction";
import { Mode } from "../gameConfig/Mode";

export const GameConfigContext = React.createContext({
  showResult: false,
  direction: Direction.NUMBER_TO_LETTER,
  mode: Mode.RANDOM,
});
