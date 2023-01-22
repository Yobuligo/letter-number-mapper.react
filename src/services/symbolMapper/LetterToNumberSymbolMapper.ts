import { ISymbolMapper } from "./ISymbolMapper";

class LetterToNumberSymbolMapperDefault implements ISymbolMapper {
  map(symbol: string): string {
    return (symbol.charCodeAt(0) - 64).toString();
  }
}
export const LetterToNumberSymbolMapper = new LetterToNumberSymbolMapperDefault();
