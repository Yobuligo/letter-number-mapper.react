import { IDataObject } from "./IDataObject";

/**
 * An implementation of this interface represents a DataAccessObject,
 * which is responsible for providing access to data of a specific type {@link T} that must extend {@link IDataObject}.
 */
export interface IDataAccessObject<T extends IDataObject> {
  add(data: Omit<T, "id">): T;
  findAll(): T[];
  findById(id: string): T | undefined;
  delete(dataObject: T): boolean;
  deleteAll(): void;
  deleteById(id: string): boolean;
  update(dataObject: T): boolean;
}
