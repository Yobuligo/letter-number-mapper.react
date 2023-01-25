import { ISymbolPicker } from "./ISymbolPicker";

class NumberSymbolPickerDefault implements ISymbolPicker {
  pickNext(): string {
    return Math.round(Math.random() * 26).toString();
  }
  getAll(): string[] {
    let numbers = [];
    for (let i = 1; i < 27; i++) {
      numbers.push(i.toString());
    }
    return numbers;
  }
}
export const NumberSymbolPicker = new NumberSymbolPickerDefault();
