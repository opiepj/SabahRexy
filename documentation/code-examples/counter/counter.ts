import {Component, Input} from '@angular/core';

@Component({
  selector: 'counter',
  template: '<button (click)="increment()">Increment Value</button>'
})

export class CounterComponent {
  
  @Input() private _value: any;
  
  public increment(): void {
    this._value.previous = this._value.current;
    this._value.current++;
  }
  
}
