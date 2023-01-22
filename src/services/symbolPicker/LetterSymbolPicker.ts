import { ISymbolPicker } from "./ISymbolPicker";

class LetterSymbolPickerDefault implements ISymbolPicker {
  alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  pickNext(): string {
    const positionInAlphabet = Math.floor(Math.random() * this.alphabet.length);
    return this.alphabet[positionInAlphabet];
  }
}
export const LetterSymbolPicker = new LetterSymbolPickerDefault();
