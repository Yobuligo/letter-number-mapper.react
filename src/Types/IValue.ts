export interface IValue<T> {
  readonly value: T;
  setValue(newValue: T): void;
}
