import {Component, ViewChildren, QueryList} from '@angular/core';
import {ChildComponent} from './child.component';

@Component({
  selector: 'parent',
  template: `<div>
                <button (click)="updateViewChildren()">Update Time via ViewChildren</button>
                <child></child>
                <child></child>
              </div>`
})

export class ParentComponent {
  
  @ViewChildren(ChildComponent) private _viewChildren: QueryList<ChildComponent>;
  
  constructor() {
    
  }
  
  public updateViewChildren() {
    this._viewChildren.toArray().forEach((child) => child.setTime(new Date().toTimeString()));
  }
  
}
