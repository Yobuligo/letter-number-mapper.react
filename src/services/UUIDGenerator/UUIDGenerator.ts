import { IUUIDGenerator } from "./IUUIDGenerator";

export class UUIDGenerator implements IUUIDGenerator {
  private cursor: number = -1;
  get next(): string {
    this.cursor++;
    return this.cursor.toString();
  }
}
