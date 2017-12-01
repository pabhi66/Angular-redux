import { Component } from '@angular/core';
import { NgRedux, select} from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

import { IAPPState } from './store';
import { CounterActions } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  @select() readonly counter$: Observable<number>;
  subscription;

  constructor(private ngRedux: NgRedux<IAPPState>, private actions: CounterActions) {}

  increment() {
    this.ngRedux.dispatch(this.actions.increment());
  }

  decrement() {
    this.ngRedux.dispatch(this.actions.decrement());
  }
}
