import {Component, OnInit} from '@angular/core';
import {ReactTreeView} from './react-tree-view';

@Component({
  selector: 'angular-2-host',
  template: require('./views/angular-2-host.html')
})

export class Angular2HostComponent implements OnInit {
  
  public ngOnInit() {
    ReactTreeView.initialize('Locations');
  }
  
}
