import {Subject} from 'rxjs/Subject';
import {Customer} from './customer';

export class CustomerEventEmitter extends Subject<Customer> {
  
  constructor() {
    super();
  }
  
  public emit(value) {
    super.next(value);
  }
}
