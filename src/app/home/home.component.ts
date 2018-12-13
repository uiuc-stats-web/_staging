import { Component, OnInit } from '@angular/core';
import { ApplyDataService } from '../_service/apply-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string;
  description: string;
  appDescription: string;
  logoPath = '/assets/logos/Datathon Word Logo.png';

  constructor(private dataService: ApplyDataService) {
  }

  ngOnInit() {
    this.dataService.getData('home').subscribe(
      (data) => {
        // console.log(data['Title']);
        this.title = data['Title'] ? data['Title'] : 'Title';
        this.description = data['Description'] ? data['Description'] : 'Description';
        this.appDescription = data['Application_Description'] ? data['Application_Description'] : '';
      },
      (error) => {
        this.title = 'Title';
        this.description = 'Description';
        this.appDescription = '';
        console.log(error);
      }
    );
  }

}
