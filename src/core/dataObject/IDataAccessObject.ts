import { IDataObject } from "./IDataObject";

export interface IDataAccessObject<T extends IDataObject> {
  add(data: Omit<T, "id">): T;
  findAll(): T[];
  findById(id: string): T | undefined;
  delete(dataObject: T): boolean;
  deleteById(id: string): boolean;
  update(dataObject: T): boolean;
}
