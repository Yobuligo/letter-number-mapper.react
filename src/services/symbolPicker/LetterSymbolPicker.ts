import { Letters } from "./../../Types/Types";
import { ISymbolPicker } from "./ISymbolPicker";

class LetterSymbolPickerDefault implements ISymbolPicker {
  pickNext(): string {
    const positionInAlphabet = Math.floor(Math.random() * Letters.length);
    return Letters[positionInAlphabet];
  }
}
export const LetterSymbolPicker = new LetterSymbolPickerDefault();
