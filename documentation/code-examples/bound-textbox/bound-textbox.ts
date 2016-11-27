import {Component} from '@angular/core';

@Component({
  selector: 'bound-textbox',
  template: '<h1>Bound Textbox</h1><input [value]="getText()" (keyup)="typing($event)" /><span>{{getText()}}</span>'
})

export class BoundTextboxComponent {
  
  
  private _text: string;
  
  constructor() {
    this._text = 'hello';
  }
  
  public getText(): string {
    return this._text;
  }
  
  public typing($event): void {
    this._text = $event.target.value;
  }
  
}
