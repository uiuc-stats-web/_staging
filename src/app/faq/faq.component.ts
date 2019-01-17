import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Faq } from './faq.model';
import { FaqService } from '../_service/faq.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['../_global/background.scss', '../_global/box.scss', './faq.component.scss']
})
export class FaqComponent implements OnInit, OnDestroy, AfterViewInit {
  faqs: Faq[];
  private subscription: Subscription;
  // pos:

  constructor(private faqService: FaqService) { }

  ngOnInit() {
    this.subscription = this.faqService.fireFaq.subscribe(
      (data) => {this.faqs = data; }
    );
    this.faqs = this.faqService.getFaq();
  }

  ngAfterViewInit(): void {
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
