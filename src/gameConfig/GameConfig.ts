import { Direction } from "./Direction";
import { IGameConfig } from "./IGameConfig";
import { Mode } from "./Mode";

class GameConfigDefault implements IGameConfig {
  private showResultInternal: boolean = false;
  private directionInternal: Direction = Direction.LETTER_TO_NUMBER;
  private modeInternal: Mode = Mode.RANDOM;

  public get showResult(): boolean {
    return this.showResultInternal;
  }

  public set showResult(value: boolean) {
    this.showResultInternal = value;
    this.logConfig();
  }

  public get direction(): Direction {
    return this.directionInternal;
  }

  public set direction(value: Direction) {
    this.directionInternal = value;
    this.logConfig();
  }

  public get mode(): Mode {
    return this.modeInternal;
  }

  public set mode(value: Mode) {
    this.modeInternal = value;
    this.logConfig();
  }

  private logConfig() {
    console.log(`Config changed to:`);
    for (let prop in this) {
      console.log(`Prop ${prop}: ${this[prop]}`);
    }
  }
}

export const GameConfig: IGameConfig = new GameConfigDefault();
