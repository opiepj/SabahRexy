import {Component} from '@angular/core';

// Import the html file as a string
let template = require('./views/home.html');
// Little Tricky: Import style as a string with the raw-loader and turn it into css using the sass-loader.
let style = require('!!raw!sass!./views/home.scss');

@Component({
  selector: 'home',
  template: template,
  styles: [style]
})
export class HomeComponent {
  
  public color: string;
  
  constructor() {
    this.color = 'text-default';
  }
  
  public changeColor(): string {
    console.log('change!');
    let colors: Array<string> = [
      'text-success',
      'text-danger',
      'text-warning',
      'text-info',
      'text-default'
    ];
    
    let ran: number = Math.random() * colors.length;
    let index: number = Math.floor(ran);
    
    return colors[index];
  }
  
}
