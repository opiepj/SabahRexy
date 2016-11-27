import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Component({
  template: `
    <h3>Click three numbers to add</h3>
    <div (click)="add(number)" class="box" *ngFor="let number of getNumbers()">{{number}}</div>
    <div class="sum" *ngIf="getShowSum">SUM: {{getCalculation().sum}}</div>
  `
})
export class RxJsBufferingComponent implements OnInit {
  
  private _numbers: Array<number>;
  private _sum: Subject<number>;
  private _series: any;
  private _calculation: {sum: number};
  private _showSum: boolean;
  
  constructor() {
    this._numbers = [1, 2, 3, 4, 5];
    this._sum = new Subject<number>();
    this._calculation = {};
    this._showSum = false;
  }
  
  
  public ngOnInit() {
    this._series = this._sum
      .asObservable()
      .do(a => this._showSum = false)
      .bufferCount(3)
      .subscribe(res => {
        this._calculation = {sum: res.reduce((a, b) => a + b)};
        this._showSum = true;
      });
  }
  
  public getNumbers(): Array<number> {
    return this._numbers;
  }
  
  public getShowSum(): boolean {
    return this._showSum;
  }
  
  public getCalculation(): {sum: number} {
    return this._calculation;
  }
  
  public add(num: number) {
    this._sum.next(num);
  }
  
}
