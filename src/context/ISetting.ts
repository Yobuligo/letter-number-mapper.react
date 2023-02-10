export interface ISetting<T> {
  readonly value: T;
  dispatcher(value: T): void;
}
