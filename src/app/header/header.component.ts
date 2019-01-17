import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavService } from '../_service/nav.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Position } from '../_models/position.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  activeComponent: String;
  private sub_active: Subscription;
  private sub_bp: Subscription;
  positions: Position;

  constructor(private navService: NavService, private router: Router) {
    this.activeComponent = 'Home';
    this.sub_active = this.navService.activeComponent.subscribe(
      (component: String) => {
        this.activeComponent = component;
      }
    );
    this.sub_bp = this.navService.breakPoints.subscribe(
      (points) => {
        this.positions = points;
        console.log(points);
      }
    );
  }

  ngOnInit() {
  }

  navigateTo(component: string) {
    this.router.navigate(['/home'], { fragment: component });
    window.scrollTo({top: this.positions[component], left: 0, behavior: 'smooth'});
  }

  ngOnDestroy(): void {
    this.sub_active.unsubscribe();
    this.sub_bp.unsubscribe();
  }

}
