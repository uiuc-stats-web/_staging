import { Component, OnInit, OnDestroy } from '@angular/core';
import { Faq } from './faq.model';
import { FaqService } from '../_service/faq.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit, OnDestroy {
  private faqs: Faq[];
  private subscription: Subscription;

  constructor(private faqService: FaqService) { }

  ngOnInit() {
    this.subscription = this.faqService.fireFaq.subscribe(
      (data) => {this.faqs = data; }
    );
    this.faqs = this.faqService.getFaq();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
