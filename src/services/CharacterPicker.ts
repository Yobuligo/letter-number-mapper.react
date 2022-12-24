import { Direction } from "../gameConfig/Direction";
import { GameConfig } from "./../gameConfig/GameConfig";
import { ICharacterPicker } from "./ICharacterPicker";

class CharacterPickerDefault implements ICharacterPicker {
  next(): string {
    if (GameConfig.direction === Direction.LETTER_TO_NUMBER) {
      return this.nextLetter();
    } else {
      return this.nextNumber();
    }
  }

  private nextNumber(): string {
    return (Math.round( Math.random() * 26)).toString();
  }

  private nextLetter(): string {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = Math.random() * 26;
    return characters.charAt(Math.floor(number));
  }
}

export const CharacterPicker: ICharacterPicker = new CharacterPickerDefault();
