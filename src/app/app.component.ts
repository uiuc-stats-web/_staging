import { Component, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { routerTransition } from './_animations/routing.animations';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { NavService } from './_service/nav.service';
import { ActivatedRoute } from '@angular/router';
import { Position } from './_models/position.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent implements AfterViewInit {
  title = 'ds-web';

  // @ViewChild(AboutComponent) aboutComp: AboutComponent;
  // @ViewChild(FaqComponent) faqComp: FaqComponent;
  // @ViewChild(HomeComponent) homeComp: HomeComponent;
  // @ViewChild(ScheduleComponent) scheduleComp: ScheduleComponent;
  // @ViewChild(SponsorComponent) sponsorComp: SponsorComponent;
  // @ViewChild(WorkshopComponent) workshopComp: WorkshopComponent;

  // about_pos: number;
  // faq_pos: number;
  // home_pos: number;
  // schedule_pos: number;
  // sponsor_pos: number;
  // workshop_pos: number;

  constructor(private navService: NavService, private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    // this.about_pos = this.aboutComp.pos;
    // this.faq_pos = this.faqComp.pos;
    // this.home_pos = 0;
    // this.schedule_pos = this.scheduleComp.pos;
    // this.sponsor_pos = this.sponsorComp.pos;
    // this.workshop_pos = this.workshopComp.pos;
    // this.navService.activateBP(new Position({
    //   about: this.about_pos,
    //   faq: this.faq_pos,
    //   home: this.home_pos,
    //   schedule: this.schedule_pos,
    //   sponsor: this.sponsor_pos,
    //   workshop: this.workshop_pos
    //   })
    // );
  }

  @HostListener('window:scroll', ['$event']) scrollTrigger(event) {
    // if (window.pageYOffset <= this.faq_pos) {
    //   this.navService.changeActiveComponent('About');
    // } else if (window.pageYOffset > this.faq_pos && window.pageYOffset <= this.schedule_pos) {
    //   this.navService.changeActiveComponent('Faq');
    // } else if (window.pageYOffset > this.schedule_pos && window.pageYOffset <= this.sponsor_pos) {
    //   this.navService.changeActiveComponent('Schedule');
    // } else if (window.pageYOffset > this.sponsor_pos && window.pageYOffset <= this.workshop_pos) {
    //   this.navService.changeActiveComponent('Sponsor');
    // } else if (window.pageYOffset > this.workshop_pos) {
    //   this.navService.changeActiveComponent('Workshop');
    // }
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
