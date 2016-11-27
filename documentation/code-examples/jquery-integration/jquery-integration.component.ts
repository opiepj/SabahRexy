import {Component, ElementRef, Inject, OnInit} from '@angular/core';

declare var jQuery: any;

// @WARNING WE SHOULD NEVER BE USING JQUERY as it can break our application, nor can we maintain it!!!
// However if you HAVE to then this is what you would do

@Component({
  selector: 'jquery-integration',
  template: require('./views/jquery-integration.html')
})

export class JqueryIntegrationComponent implements OnInit {
  private _elementRef: ElementRef;
  
  constructor(@Inject(ElementRef) elementRef: ElementRef) {
    this._elementRef = elementRef;
  }
  
  public ngOnInit() {
    jQuery(this._elementRef.nativeElement).find('.moving-box').draggable({containment: '#draggable-parent'});
  }
}
