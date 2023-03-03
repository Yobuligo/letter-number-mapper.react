/**
 * An implementation of this interface represents a parameter which should be persisted
 */
export interface IStoredParameter<T> {
  readonly value: T;
  dispatcher(value: T): void;
}
