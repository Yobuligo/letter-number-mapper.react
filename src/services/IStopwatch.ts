/**
 * An implementation of this interface represents a stopwatch.
 * It provides methods to start, stop or reset the stopwatch and to get the elapsed time.
 */
export interface IStopwatch {
  readonly elapsed: number;
  reset(): void;
  start(): void;
  stop(): void;
}
