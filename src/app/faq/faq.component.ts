import { Component, OnInit } from '@angular/core';
import { Faq } from './faq.model';
import { FaqService } from '../_service/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  private faqs: Faq[];

  constructor(private faqService: FaqService) { }

  ngOnInit() {
    this.faqService.fireFaq.subscribe(
      (data) => {this.faqs = data; }
    );
  }

}
