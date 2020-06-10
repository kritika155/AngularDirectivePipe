import { NgModule, Component, OnDestroy } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { interval } from "rxjs";
import { take, map } from "rxjs/operators";
import {Observable} from 'rxjs';

@Component({
  selector: "async-pipe",
  templateUrl:'./async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnDestroy {
  promise: Promise<{}>;
  observable$: Observable<number>;
  private subscription;
  observableData: number;

  constructor() {
    this.promise = this.getPromise();
    this.observable$ = this.getObservable();
    this.subscribeObservable();
  }

  getObservable() {
    return interval(1000).pipe(
      take(10),
      map(v => v * v)
    );
  }

  // AsyncPipe subscribes to the observable automatically
  subscribeObservable() {
    this.subscription = this.getObservable().subscribe(
      v => (this.observableData = v)
    );
  }

  getPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Promise complete!"), 3000);
    });
  }

  // AsyncPipe unsubscribes from the observable automatically
  ngOnDestroy() {
    // this.subscription.unsubscribe();
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}