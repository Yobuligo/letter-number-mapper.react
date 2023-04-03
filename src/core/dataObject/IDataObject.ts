/* eslint-disable @typescript-eslint/no-unused-vars */
import { IDataAccessObject } from "./IDataAccessObject";

/**
 * An implementation of this interface represents a DataObject.
 * A DataObject contains data of a specific entity. DataObjects can be create, loaded, updated or deleted by {@link IDataAccessObject}s.
 */
export interface IDataObject {
  readonly id: string;
}
