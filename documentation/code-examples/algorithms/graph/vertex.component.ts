import {Component, ElementRef, ViewContainerRef, ViewChild, Input} from '@angular/core';
import {EdgeService} from './edge.service';
import {Coordinates} from './coordinates';

@Component({
  selector: 'vertex',
  template: `
        <div #vertex class="vertex" (click)="setCoordinates()">
            <span class="vertex-text">{{getValue()}}</span>
        </div>`
})

export class VertexComponent {
  
  @Input() private _value: string;
  @ViewChild('vertex') private _element: ElementRef;
  
  constructor(private edgeService: EdgeService, private vc: ViewContainerRef) {
  }
  
  public setCoordinates(): void {
    let offsetLeft = this._element.nativeElement.offsetLeft;
    let offsetTop = this._element.nativeElement.offsetTop;
    this.edgeService.next(new Coordinates(offsetLeft, offsetTop, this.vc));
  }
  
  public getValue(): string {
    return this._value;
  }
}
