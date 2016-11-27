import {Component, ComponentFactoryResolver, ViewChild, OnInit} from '@angular/core';
import {EdgeService} from './edge.service';
import {EdgeComponent} from './edge.component';

@Component({
  selector: 'graph',
  template: require('../views/graph.html'),
  providers: [EdgeService]
})

export class GraphComponent implements OnInit {
  
  constructor(private componentResolver: ComponentFactoryResolver, private edgeService: EdgeService) {
  }
  
  public ngOnInit() {
    this.edgeService.getCoordinates().subscribe(coordinates => {
      let factory = this.componentResolver.resolveComponentFactory(EdgeComponent);
      let res = coordinates.first.viewContainer.createComponent(factory);
      res.instance.setCoordinates(coordinates.first, coordinates.second);
    });
  }
}
