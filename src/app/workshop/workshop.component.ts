import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['../_global/background.scss', './workshop.component.scss']
})
export class WorkshopComponent implements OnInit, AfterViewInit {
  pos: number;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.pos = document.getElementById('workshop-title').offsetTop;
  }

}
