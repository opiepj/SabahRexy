import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable() // All services must have this annotation in order to become an angular service.
export class ReferenceService {
  
  constructor(private _http: Http) {
    
  }
  
  public helloWorld(): string {
    return 'Hello World!';
  }
  
}
