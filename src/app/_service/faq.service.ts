import { Faq } from '../faq/faq.model';
import { ApplyDataService } from './apply-data.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class FaqService {
  private faqs: Faq[];
  fireFaq = new Subject<Faq[]>();

  constructor(private dataService: ApplyDataService) {
    this.dataService.getData('faq').subscribe(
      data => {
        console.log(data);
        this.updateItems(data);
        this.fireFaq.next(this.getFaq());
      },
      error => {
        console.log(error);
      }
    );
  }

  getFaq() {
    return this.faqs.slice();
  }

  updateItems(data) {
    const faqItems = [];
    this.validateUpdate(faqItems);
  }

  validateUpdate(faqItems) {
    if (faqItems !== this.faqs && faqItems.length > 0) {
      this.faqs = faqItems;
    }
  }
}
