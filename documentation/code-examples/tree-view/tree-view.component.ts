import {Component, Input} from '@angular/core';
import {Directory} from './directory';

@Component({
  selector: 'tree-view',
  template: require('./views/tree-view.html')
})

export class TreeViewComponent {
  @Input() public directories: Array<Directory>;
}
