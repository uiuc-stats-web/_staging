import { SItem } from '../schedule/sItem.model';
import { SDayItem } from '../schedule/sDayItem.model';
import { Subject } from 'rxjs';
import { ApplyDataService } from './apply-data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ScheduleService {
  fireItems = new Subject<SDayItem[]>();
  private items: SDayItem[] = [
    new SDayItem({
      title: 'Day5',
      date: '2018-06-17',
      items: [
        new SItem({ name: 'Registration', timeStart: '2018-06-17T09:30:00', timeEnd: '2018-06-17T10:30:00' }),
        new SItem({ name: 'Opening', timeStart: '2018-06-17T10:30:00', timeEnd: '2018-06-17T11:30:00' }),
        new SItem({ name: 'Lunch', timeStart: '2018-06-17T11:30:00', timeEnd: '2018-06-17T13:00:00' }),
      ]}
    ),
  ];

  constructor(private dataService: ApplyDataService) {
    this.dataService.getData('schedule').subscribe(
      data => {
        console.log(data);
        this.updateItems(data);
        this.fireItems.next(this.getItems());
      },
      error => { console.log(error);
      }
    );
  }

  updateItems(data) {
    const dayitems = [];
    for (let i = 0; i < data.length; i++) {
      const item = [];
      for (let j = 0; j < data[i].items.length; j++) {
        item.push( new SItem( data[i].items[j]));
      }
      const dayItem = new SDayItem({
        title: data[i].title,
        date: data[i].date,
        items: item});
      dayitems.push(dayItem);
    }
    this.validateUpdate(dayitems);
  }

  validateUpdate(dayitems) {
    if (dayitems !== this.items && dayitems.length > 0) {
      this.items = dayitems;
    }
  }

  getItems() {
    return this.items.slice();
  }
}
