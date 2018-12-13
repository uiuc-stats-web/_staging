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
import { ScheduleEditComponent } from './schedule/schedule-edit/schedule-edit.component';
import { ScheduleItemComponent } from './schedule/schedule-show/schedule-item/schedule-item.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { WorkshopShowComponent } from './workshop/workshop-show/workshop-show.component';
import { WorkshopItemComponent } from './workshop/workshop-show/workshop-item/workshop-item.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { SponsorItemComponent } from './sponsor/sponsor-item/sponsor-item.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FaqComponent } from './faq/faq.component';

import { WorkshopService } from './workshop/workshop.service';
import { SponsorService } from './sponsor/sponsor.service';
import { ScheduleService } from './_service/schedule.service';
import { ContentService } from './_service/content.service';
import { ApplyDataService } from './_service/apply-data.service';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    ScheduleComponent,
    ScheduleShowComponent,
    ScheduleEditComponent,
    ScheduleItemComponent,
    WorkshopComponent,
    WorkshopShowComponent,
    WorkshopItemComponent,
    SponsorComponent,
    SponsorItemComponent,
    MainContentComponent,
    FaqComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ScheduleService, WorkshopService, SponsorService, ContentService, ApplyDataService],
  bootstrap: [AppComponent],
  entryComponents: [HomeComponent]
})
export class AppModule { }
