import { IDataObject } from "./IDataObject";

export interface IDataAccessObject<T extends IDataObject> {
  add(dataObject: T): void;
  findAll(): T[];
  findById(id: string): T | undefined;
  delete(dataObject: T): boolean;
  deleteById(id: string): boolean;
  update(dataObject: T): boolean;
}
