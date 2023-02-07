import { ClickHandler, HighlightedSymbols } from "./KeyboardTypes";

/**
 * An implementation of this interface is responsible for providing the context to display a keyboard and handle events.
 */
export interface IKeyboardContext {
  clickHandler?: ClickHandler;
  highlightedSymbols?: HighlightedSymbols;
  highlightSymbolClassName?: string;
}
