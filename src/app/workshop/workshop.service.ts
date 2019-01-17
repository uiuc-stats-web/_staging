import { Workshop } from './workshop.model';
import { Subject } from 'rxjs';
import { ApplyDataService } from '../_service/apply-data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class WorkshopService {
  private workshops: Workshop[] = [
    new Workshop(
      {
      iconPath: 'https://via.placeholder.com/150',
      title: 'Trading Strategy',
      date: '2018-03-03',
      location: 'Siebel 1024',
      speaker: {name: 'John Doe', title: 'Product Manager'} ,
      description: 'Ergo, si semel tristior effectus est, hilara vita amissa est? Videsne quam sit magna dissensio? \
        At quicum ioca seria, ut dicitur, quicum arcana, quicum occulta omnia? Sed vobis voluptatum per\
        ceptarum recordatio vitam beatam facit, et quidem corpore perceptarum. Nam si amitti vita beata\
         potest, beata esse non potest. Conferam tecum, quam cuique verso rem subicias; '
      }
    ),
    new Workshop(
      {
        iconPath: 'https://via.placeholder.com/150',
        title: 'Trading Strategy',
        date: '2018-03-03',
        location: 'Siebel 1024',
        speaker: { name: 'John Doe', title: 'Product Manager' },
        description: 'Ergo, si semel tristior effectus est, hilara vita amissa est? Videsne quam sit magna dissensio? \
        At quicum ioca seria, ut dicitur, quicum arcana, quicum occulta omnia? Sed vobis voluptatum per\
        ceptarum recordatio vitam beatam facit, et quidem corpore perceptarum. Nam si amitti vita beata\
         potest, beata esse non potest. Conferam tecum, quam cuique verso rem subicias; '
      }
    ),
    new Workshop(
      {
        iconPath: 'https://via.placeholder.com/150',
        title: 'Trading Strategy',
        date: '2018-03-03',
        location: 'Siebel 1024',
        speaker: { name: 'John Doe', title: 'Product Manager' },
        description: 'Ergo, si semel tristior effectus est, hilara vita amissa est? Videsne quam sit magna dissensio? \
        At quicum ioca seria, ut dicitur, quicum arcana, quicum occulta omnia? Sed vobis voluptatum per\
        ceptarum recordatio vitam beatam facit, et quidem corpore perceptarum. Nam si amitti vita beata\
         potest, beata esse non potest. Conferam tecum, quam cuique verso rem subicias; '
      }
    ),
  ];
  fireWorkshops = new Subject<Workshop[]>();

  constructor(private dataService: ApplyDataService) {
    this.dataService.getData('workshop').subscribe(
      data => {
        this.updateWorkshops(data);
        this.fireWorkshops.next(this.getWorkshops());
      },
      error => {
        console.log(error);
      }
    );
  }

  updateWorkshops(data) {
    const newWorkshops = [];
    // console.log(data);
    for (let i = 0; i < data.length; i++) {
      const workshop = new Workshop(data[i]);
      newWorkshops.push(workshop);
    }
    this.validateUpdate(newWorkshops);
  }

  validateUpdate(newWorkshops) {
    if (newWorkshops !== this.workshops && newWorkshops.length > 0) {
      this.workshops = newWorkshops;
    }
  }

  getWorkshops() {
    return this.workshops.slice();
  }
}
