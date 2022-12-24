import { Direction } from "./Direction";
import { Mode } from "./Mode";

export interface IGameConfig {
  direction: Direction;
  mode: Mode;
  showResult: boolean
}
