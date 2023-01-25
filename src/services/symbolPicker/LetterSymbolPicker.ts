import { Alphabet } from "./../../Types/Types";
import { ISymbolPicker } from "./ISymbolPicker";

class LetterSymbolPickerDefault implements ISymbolPicker {
  pickNext(): string {
    const positionInAlphabet = Math.floor(Math.random() * Alphabet.length);
    return Alphabet[positionInAlphabet];
  }
  getAll(): string[] {
    return this.alphabet;
  }
}
export const LetterSymbolPicker = new LetterSymbolPickerDefault();
