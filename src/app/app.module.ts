import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleShowComponent } from './schedule/schedule-show/schedule-show.component';
import { ScheduleItemComponent } from './schedule/schedule-show/schedule-item/schedule-item.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { WorkshopShowComponent } from './workshop/workshop-show/workshop-show.component';
import { WorkshopItemComponent } from './workshop/workshop-show/workshop-item/workshop-item.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { SponsorItemComponent } from './sponsor/sponsor-item/sponsor-item.component';
import { FaqComponent } from './faq/faq.component';

import { WorkshopService } from './workshop/workshop.service';
import { SponsorService } from './sponsor/sponsor.service';
import { ScheduleService } from './_service/schedule.service';
import { ContentService } from './_service/content.service';
import { ApplyDataService } from './_service/apply-data.service';
import { FaqService } from './_service/faq.service';
import { NavService } from './_service/nav.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    ScheduleComponent,
    ScheduleShowComponent,
    ScheduleItemComponent,
    WorkshopComponent,
    WorkshopShowComponent,
    WorkshopItemComponent,
    SponsorComponent,
    SponsorItemComponent,
    FaqComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    ScheduleService,
    WorkshopService,
    SponsorService,
    ContentService,
    FaqService,
    ApplyDataService,
    NavService
  ],
  bootstrap: [AppComponent],
  entryComponents: [HomeComponent]
})
export class AppModule { }
