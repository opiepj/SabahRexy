import {Component} from '@angular/core';

@Component({
  selector: 'comment-demo',
  template: require('./views/comment-demo.html')
})

export class CommentDemoComponent {
  
  private _counter = 0;
  
  public count() {
    this._counter++;
  }
  
}
