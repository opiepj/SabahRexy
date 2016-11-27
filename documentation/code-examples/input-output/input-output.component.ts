import {Component, Input, Output, EventEmitter, Attribute, OnInit, ElementRef} from '@angular/core';

@Component({
  template: `<h1>{{headline}}</h1>
              <div>Counter: {{counter}}</div>
              <div>Running total of counter values: {{sum}}</div>
              <div>Growing string: {{getGrowingString()}}</div>`,
  
  selector: 'input-output'
})

export class InputOutputComponent implements OnInit {
  
  public el: ElementRef;
  
  @Output() public stringChanged: EventEmitter<{value: string}>;
  
  @Input() public counter: number;
  
  @Input() public fixedValue: string;
  
  @Input() public sum: number;
  
  @Input() public headline: string;
  
  @Input() public plain: string;
  
  @Input()
  public set growingString(value) {
    this._growingString = value.toLowerCase();
    this.stringChanged.next({value: 'changed to ' + this._growingString});
  }
  
  private _growingString: string;
  
  constructor(el: ElementRef) {
    this.stringChanged = new EventEmitter();
    console.log(this.plain);
    this.el = el;
    
  }
  
  public ngOnInit() {
    console.log(this.fixedValue);
  }
  
  public getGrowingString(): string {
    return this._growingString;
  }
}
