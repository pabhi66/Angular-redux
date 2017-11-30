import { Component } from '@angular/core';
import {NgRedux} from 'ng2-redux';
import { OnDestroy } from '@angular/core';

import { IAPPState } from './store';
import { CounterActions } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app';
  counter: number;
  subscription;

  constructor(private ngRedux: NgRedux<IAPPState>, private actions: CounterActions) {
    this.subscription = ngRedux.select<number>('counter')
      .subscribe(newCount => this.counter = newCount);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  increment() {
    this.ngRedux.dispatch(this.actions.increment());
  }

  decrement() {
    this.ngRedux.dispatch(this.actions.decrement());
  }
}
