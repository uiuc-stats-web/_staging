import { Subject } from 'rxjs';
import { Position } from '../_models/position.model';

export class NavService {
    activeComponent = new Subject<String>();
    routerComponent = new Subject<String>();
    breakPoints = new Subject<Position>();

    changeActiveComponent(component: String) {
        this.activeComponent.next(component);
    }

    activateBP(bp: Position) {
        this.breakPoints.next(bp);
    }

    jumpToComponent(component: String) {
        this.routerComponent.next(component);
    }
}
