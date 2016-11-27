import {Component, Input} from '@angular/core';
import {Coordinates} from './coordinates';

@Component({
  selector: 'edge',
  template: '<div class="edge" [ngStyle]="getStyle()"></div>'
})

export class EdgeComponent {
  private _style = {};
  private _x1: number;
  private _y1: number;
  private _x2: number;
  private _y2: number;
  
  public setCoordinates(first, second): void {
    this._x1 = first.x;
    this._y1 = first.y;
    this._x2 = second.x;
    this._y2 = second.y;
    
    this.drawLine(this._x1, this._y1, this._x2, this._y2);
  }
  
  public drawLine(x1, y1, x2, y2): void {
    let length = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    let angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
    let transform = 'rotate(' + angle + 'deg)';
    
    this._style = {
      'position': 'absolute',
      'transform': transform,
      'width': length
    };
  }
  
  public getStyle() {
    return this._style;
  }
}
