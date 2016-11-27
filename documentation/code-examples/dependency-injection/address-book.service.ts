import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

export interface Person {
  name: string;
  address: string;
}

@Injectable()
export class AddressBookService {
  
  constructor(private http: Http) {
    console.log('Creating AddressBookService');
    this.http = http;
  }
  
  public getEntries(): Observable<{people: Person[]}> {
    return this.http.get('./people.json').map((res: Response) => res.json());
  }
  
}
