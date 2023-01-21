import { ISymbolMapper } from "./ISymbolMapper";

class NumberToLetterSymbolMapperDefault implements ISymbolMapper {
  map(symbol: string): string {
    return String.fromCharCode(Number(symbol) + 64);
  }
}

export const NumberToLetterSymbolMapper = new NumberToLetterSymbolMapperDefault();
