import {Component, ViewChild, ElementRef, AfterViewInit, Input, OnChanges, SimpleChange} from '@angular/core';
import {OdometerClass} from 'app/src/common/components/odometer/interfaces/odometer.interface';

type Odometer = any;
declare let Odometer: Odometer;

/**
 * OdometerComponent
 * @Warning this component relies on the library "Odometer" which is a web only widget
 * This component will not work for native mobile environments
 * @TODO support native mobile
 */
@Component({
  selector: 'odometer',
  template: `<span #myNum>%</span>`,
})
export class OdometerComponent implements AfterViewInit, OnChanges {
  
  @Input() public num: number;
  @ViewChild('myNum') private _myNum: ElementRef;
  private _od: OdometerClass;
  private _odLoaded: boolean;
  private _startingNumber: number;
  
  constructor() {
    this._startingNumber = 0; // Add third decimal to ensure first two aren't removed
  }
  
  /**
   * We use AfterView since we are interested in the elements the post render gives.
   * OnInit is the event when the component is created, not rendered.
   */
  public ngAfterViewInit() {
    this._od = new Odometer({
      el: this._myNum.nativeElement, // Odometer Library Requires Native Element
      value: this._startingNumber, // Hack to keep trailing zero
      format: '(,ddd).ddd', // Hack to keep trailing zero
      theme: 'default'
    });
    this._odLoaded = true;
    this.update(this.num);
  }
  
  /**
   * Change Detection on the price input
   * @param changes
   */
  public ngOnChanges(changes: {[propKey: string]: SimpleChange}): void {
    for (let propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        if (propName === 'num') {
          let changedPrice: SimpleChange = changes[propName];
          if (this._odLoaded) {
            this.update(changedPrice.currentValue);
          }
        }
      }
    }
  }
  
  /**
   * Update Price to new value
   * Odometer will remove trailing and leading zero's. Adding '0.001' to the end will ensure we see the last two
   * decimals. We use css to hide the 3rd trailing digit.
   */
  public update(val: any): void {
    this._od.update(parseFloat(val) + this._startingNumber);
  }
  
}
