import {Component, Input} from '@angular/core';

@Component({
  selector: 'adder',
  template: '<span>{{operands.op1 + operands.op2}}</span>'
})

export class AdderComponent {
  
  @Input() public operands: {op1: number, op2: number};
}
