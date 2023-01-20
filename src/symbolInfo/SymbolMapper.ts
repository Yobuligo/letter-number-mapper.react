export class SymbolMapperInt {
  numberToLetter(number: string): string {
    return String.fromCharCode(Number(number) + 64);
  }
  letterToNumber(letter: string): string {
    return (letter.charCodeAt(0) - 64).toString();
  }
}

export const SymbolMapper = new SymbolMapperInt();
