import {Component, Input} from '@angular/core';
import {PubSubService} from './pub-sub.service';
import {Customer} from './customer';

@Component({
  selector: 'producer',
  template: require('./views/producer.html')
})

export class ProducerComponent {
  
  @Input() public firstName = '';
  @Input() public lastName = '';
  
  constructor(private pubSubService: PubSubService) {
  }
  
  private createCustomer() {
    let customer = new Customer();
    customer.firstName = this.firstName;
    customer.lastName = this.lastName;
    
    this.pubSubService.stream.emit(customer);
  }
}
