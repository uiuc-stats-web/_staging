export class SItem {
  name: string;
  timeStart: string;
  timeEnd: string;

  // constructor(name: string, ts: string, te: string) {
  //   this.name = name;
  //   this.timeStart = ts;
  //   this.timeEnd = te;
  // }

  constructor(obj) {
    this.name = '';
    this.timeStart = '';
    this.timeEnd = '';

    if (obj) {
      Object.assign(this, obj);
    }
  }
}
