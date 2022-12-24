import { Direction } from "./Direction";
import { IGameConfig } from "./IGameConfig";
import { Mode } from "./Mode";

class GameConfigDefault implements IGameConfig {
  direction: Direction = Direction.LETTER_TO_NUMBER;
  mode: Mode = Mode.RANDOM;
}

export const GameConfig: IGameConfig = new GameConfigDefault();
