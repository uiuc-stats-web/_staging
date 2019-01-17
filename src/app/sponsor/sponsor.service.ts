import { Sponsor } from './sponsor.model';
import { Subject } from 'rxjs';
import { ApplyDataService } from '../_service/apply-data.service';
import { Injectable } from '@angular/core';
@Injectable()
export class SponsorService {
  emitSponsors = new Subject<Sponsor[]>();
  private sponsors: Sponsor[] = [
    new Sponsor('https://via.placeholder.com/100', 'Sponsor Title', 3, 1, 'blue'),
    new Sponsor('https://via.placeholder.com/100', 'Sponsor Title', 1, 2, 'orange'),
    new Sponsor('https://via.placeholder.com/100', 'Sponsor Title', 1, 1, 'blue'),
    new Sponsor('https://via.placeholder.com/100', 'Sponsor Title', 2, 1, 'orange'),
    new Sponsor('https://via.placeholder.com/100', 'Sponsor Title', 2, 1, 'orange'),
    new Sponsor('https://via.placeholder.com/100', 'Sponsor Title', 2, 1, 'orange'),
    new Sponsor('https://via.placeholder.com/100', 'Sponsor Title', 2, 1, 'orange'),
    new Sponsor('https://via.placeholder.com/100', 'Sponsor Title', 2, 1, 'orange'),
    new Sponsor('https://via.placeholder.com/100', 'Sponsor Title', 2, 1, 'orange'),
  ];

  constructor(private dataService: ApplyDataService) {
    this.dataService.getData('sponsor').subscribe(
      data => {
        this.updateItems(data);
        this.emitSponsors.next(this.getSponsors());
      },
      error => {
        console.log(error);
      }
    );
  }

  getSponsors() {
    return this.sponsors.slice();
  }

  updateItems(data) {
    const sponsors = data;
    this.validateUpdate(sponsors);
  }

  validateUpdate(sponsors) {
    if (sponsors !== this.sponsors && sponsors.length > 0) {
      this.sponsors = sponsors;
    }
  }
}
