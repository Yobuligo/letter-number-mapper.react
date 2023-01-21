import { ISymbolMapper } from "./ISymbolMapper";

export class NumberToLetterMapper implements ISymbolMapper {
  map(symbol: string): string {
    return String.fromCharCode(Number(symbol) + 64);
  }
}
