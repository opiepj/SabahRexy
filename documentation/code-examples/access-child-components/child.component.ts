import {Component} from '@angular/core';

@Component({
  selector: 'child',
  template: '<div>{{getTime()}}</div>'
})

export class ChildComponent {
  
  private _time: string;
  
  constructor() {
    
  }
  
  public getTime(): string {
    return this._time;
  }
  
  public setTime(value: string): void {
    this._time = value;
  }
  
}
