import { ISymbolPicker } from "./ISymbolPicker";

class NumberSymbolPickerDefault implements ISymbolPicker {
  pickNext(): string {
    return Math.ceil(Math.random() * 26).toString();
  }
}
export const NumberSymbolPicker = new NumberSymbolPickerDefault();
