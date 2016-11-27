import {Component, OnInit} from '@angular/core';
import {PubSubService} from './pub-sub.service';
import {Customer} from './customer';
import {Subscription} from 'rxjs';

@Component({
  selector: 'consumer',
  template: require('./views/consumer.html')
})

export class ConsumerComponent implements OnInit {

  
  private _processed: Customer[];
  private _subscription: Subscription;
  
  constructor(private pubSubService: PubSubService) {
    this._processed = [];
    this._subscription = null;
  }
  
  public ngOnInit() {
    this._subscription = this.pubSubService.stream.subscribe((customer: Customer) => {
      this.processCustomer(customer);
    });
  }
  
  public get subscription(): Subscription {
    return this._subscription;
  }
  
  public get processed(): Customer[] {
    return this._processed;
  }
  
  private processCustomer(customer): void {
    this._processed.push(customer);
  }
  
  private stopProcessing(): void {
    this._subscription.unsubscribe();
  }
  
}
