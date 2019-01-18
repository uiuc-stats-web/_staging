import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Sponsor } from './sponsor.model';
import { SponsorService } from './sponsor.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['../_global/background.scss', '../_global/box.scss', './sponsor.component.scss']
})
export class SponsorComponent implements OnInit, OnDestroy, AfterViewInit {
  sponsors: Sponsor[];
  private subscription: Subscription;
  pos: number;

  constructor(private sponsorService: SponsorService) { }

  ngOnInit() {
    this.subscription = this.sponsorService.emitSponsors.subscribe(
      (sponsors: Sponsor[]) => {
        this.sponsors = sponsors;
      }
    );
    this.sponsors = this.sponsorService.getSponsors();
  }

  ngAfterViewInit() {
    this.pos = document.getElementById('sponsor-title').offsetTop;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
