import {Component, Input} from '@angular/core';

@Component({
  template: `<button (click)="update()">Update</button>
              <input-output [plain]="'just a simple attribute'"
                            fixedValue="another hard coded value"
                            (stringChanged)="myStringChanged($event)"
                            [sum]="getRunningTotal()"
                            [counter]="getCount()"
                            [headline]="getMyTitle()"
                            [growingString]="getMyString()">
              </input-output>`
})

export class InputOutputDemoComponent {
  
  private _count: number;
  private _runningTotal: number;
  private _myString: string;
  
  private _myTitle: string;
  
  constructor() {
    this._count = 0;
    this._runningTotal = 0;
    this._myString = '';
    
    this._myTitle = 'Input/Output Demo';
  }
  
  public getCount(): number {
    return this._count;
  }
  
  public getRunningTotal(): number {
    return this._runningTotal;
  }
  
  public getMyString(): string {
    return this._myString;
  }
  
  public getMyTitle(): string {
    return this._myTitle;
  }
  
  public update() {
    this._count++;
    this._runningTotal += this._count;
    this._myString += 'A';
  }
  
  public myStringChanged(val) {
    console.log(val);
  }
}
