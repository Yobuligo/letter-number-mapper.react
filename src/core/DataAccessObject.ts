import { IDataAccessObject } from "./IDataAccessObject";
import { IDataObject } from "./IDataObject";

export class DataAccessObject<T extends IDataObject>
  implements IDataAccessObject<T>
{
  constructor(private storage: Storage, private key: string) {}

  add(data: Omit<T, "id">): T {
    const dataObject = { id: crypto.randomUUID(), ...data } as T;
    const dataObjects = this.findAll();
    dataObjects.push(dataObject);
    this.save(dataObjects);
    return dataObject;
  }

  delete(dataObject: T): boolean {
    return this.deleteById(dataObject.id);
  }

  deleteAll(): void {
    this.save([]);
  }

  deleteById(id: string): boolean {
    const dataObjects = this.findAll();
    const index = dataObjects.findIndex((dataObject) => dataObject.id === id);
    if (index >= 0) {
      dataObjects.splice(index, 1);
      this.save(dataObjects);
      return true;
    }
    return false;
  }

  findAll(): T[] {
    const items = this.storage.getItem(this.key);
    return items ? JSON.parse(items) : [];
  }

  findById(id: string): T | undefined {
    return this.findAll().find((dataObject) => dataObject.id === id);
  }

  isEmpty(): boolean {
    return this.findAll().length === 0;
  }

  isNotEmpty(): boolean {
    return !this.isEmpty();
  }

  update(dataObject: T): boolean {
    const dataObjects = this.findAll();
    const index = dataObjects.findIndex(
      (persistedDataObject) => persistedDataObject.id === dataObject.id
    );
    if (index >= 0) {
      dataObjects.splice(index, 1, dataObject);
      this.save(dataObjects);
      return true;
    }
    return false;
  }

  private save(dataObjects: T[]) {
    this.storage.setItem(this.key, JSON.stringify(dataObjects));
  }
}
