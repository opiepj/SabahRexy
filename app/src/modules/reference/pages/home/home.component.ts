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
  
  constructor() {
  }
  
}
