import { HighlightStatus } from "./HighlightStatus";

export type ClickHandler = (selectedSymbol: string) => void;

export type HighlightedSymbols = Map<string, HighlightStatus>;
