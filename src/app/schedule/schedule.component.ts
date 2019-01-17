import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['../_global/background.scss', './schedule.component.scss']
})
export class ScheduleComponent implements OnInit, AfterViewInit {
  pos: number;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.pos = document.getElementById('schedule-title').offsetTop;
  }
}
