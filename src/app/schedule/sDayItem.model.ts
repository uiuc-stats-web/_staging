import { SItem } from './sItem.model';

export class SDayItem {
  title: string;
  date: string;
  items: SItem[];

  constructor(obj) {
    this.title = '';
    this.date = '';
    this.items = [];

    if (obj) {
      Object.assign(this, obj);
    }
  }
}
