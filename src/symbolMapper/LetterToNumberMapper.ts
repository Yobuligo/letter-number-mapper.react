import { ISymbolMapper } from "./ISymbolMapper";

export class LetterToNumberMapper implements ISymbolMapper {
  map(symbol: string): string {
    return (symbol.charCodeAt(0) - 64).toString();
  }
}
