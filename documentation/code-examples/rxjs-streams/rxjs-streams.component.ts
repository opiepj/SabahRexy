import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/concat';

@Component({
  selector: 'rxjs-streams',
  template: require('./views/rxjs-streams.html')
})
export class RxJsStreamsComponent {
  
  private concatStream: Array<any>;
  private mergeStream: Array<any>;
  private forkJoinStream: Array<any>;
  private flatMappedStreams: any;
  
  constructor() {
    this.concatStream = [];
    this.mergeStream = [];
    this.forkJoinStream = [];
    this.flatMappedStreams = {};
  }
  
  private flatMapStreams(): void {
    let first: Observable<number> = Observable.of(10);
    
    first.flatMap((operand1) => {
      return Observable.of(operand1 + 10);
    })
      .subscribe(res => this.flatMappedStreams = {msg: '10 + 10 = ' + res});
  }
  
  private concatStreams(): void {
    let first: Observable<number> = Observable.timer(10, 500).map((r: number) => {
      return {source: 1, value: r};
    }).take(4);
    
    let second: Observable<number> = Observable.timer(10, 500).map((r: number) => {
      return {source: 2, value: r};
    }).take(4);
    
    first.concat(second).subscribe((res: number[]) => this.concatStream.push(res));
  }
  
  private mergeStreams(): void {
    let first: Observable<number> = Observable.timer(10, 500).map(r => {
      return {source: 1, value: r};
    }).take(4);
    
    let second: Observable<number> = Observable.timer(10, 500).map(r => {
      return {source: 2, value: r};
    }).take(4);
    
    first.merge(second).subscribe(res => this.mergeStream.push(res));
  }
  
  private forkJoinStreams(): void {
    let first: Observable<number> = Observable.of({source: 1, value: 1});
    
    let second: Observable<number> = Observable.of({source: 2, value: 1});
    
    Observable.forkJoin(first, second)
      .subscribe((res: Array<any>) => this.forkJoinStream = res);
  }
  
  
}
