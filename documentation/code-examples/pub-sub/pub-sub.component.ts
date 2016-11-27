import {Component} from '@angular/core';
import {PubSubService} from './pub-sub.service';

@Component({
  selector: 'pub-sub',
  template: require('./views/pub-sub.html')
})

export class PubSubComponent {
  
  constructor(private _pubSubService: PubSubService) {
    
  }
  
}
