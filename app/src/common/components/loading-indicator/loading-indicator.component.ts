import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

let template = require('./views/loading-indicator.html');
let style = require('!!raw!sass!./views/loading-indicator.scss');
@Component({
  selector: 'loading-indicator',
  template: template,
  styles: [style]
})
export class LoadingIndicatorComponent implements OnInit {
  @Input() private progress = 0;
  private id: number;
  
  constructor(private sanitizer: DomSanitizer) {
    
  }
  
  public ngOnInit() {
    this.id = Math.floor((6 * Math.random()));
  }
  
  private getTransform1() {
    const rotation = Math.min(-180 + (this.progress / 50) * 180, 0);
    return this.sanitizer.bypassSecurityTrustStyle(`rotateZ(${rotation}deg)`);
  }
  
  private getTransform2() {
    const rotation = Math.max(-180, Math.min(-180 + ((this.progress - 50) / 50) * 180, 0));
    return this.sanitizer.bypassSecurityTrustStyle(`rotateZ(${rotation}deg)`);
  }
}
