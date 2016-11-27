import {CustomerEventEmitter} from './customer-event-emitter';

export class PubSubService {
  
  private _stream: CustomerEventEmitter;
  
  constructor() {
    this._stream = new CustomerEventEmitter();
  }
  
  public get stream(): CustomerEventEmitter {
    return this._stream;
  }
  
  public set stream(value: CustomerEventEmitter) {
    this._stream = value;
  }
}
