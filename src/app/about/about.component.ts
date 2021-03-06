import { Component, OnInit } from '@angular/core';
import { paragraphAnimation } from '../_animations/paragraph.animation';
import { ApplyDataService } from '../_service/apply-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../_global/background.scss', '../_global/box.scss', './about.component.scss'],
  animations: [paragraphAnimation]
})
export class AboutComponent implements OnInit {
  description: string;

  constructor(private dataService: ApplyDataService) { }

  ngOnInit() {
    this.dataService.getData('about').subscribe(
      (data) => {
        this.description = data['Description'] ? data['Description'] : 'Description';
      },
      (error) => {
        this.description = 'Description';
        console.log(error);
      }
    );
  }

}
