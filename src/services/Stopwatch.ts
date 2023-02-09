import { IStopwatch } from "./IStopwatch";
export class Stopwatch implements IStopwatch {
  private startTime?: Date;
  private stopTime?: Date;

  constructor() {
    console.log(``);
  }

  get elapsed(): number {
    if (this.startTime === undefined) {
      return 0;
    }
    const date = this.stopTime ?? new Date();
    return (date.getTime() - this.startTime.getTime()) / 1000;
  }

  reset(): void {
    this.startTime = undefined;
    this.stopTime = undefined;
  }

  start(): void {
    this.stopTime = undefined;
    this.startTime = new Date();
  }

  stop(): void {
    this.stopTime = new Date();
  }
}
