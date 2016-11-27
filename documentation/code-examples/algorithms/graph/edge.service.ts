import {Subject} from 'rxjs/Subject';
import {Coordinates} from './coordinates';
import 'rxjs/add/operator/bufferCount';
import {Observable} from 'rxjs';

export class EdgeService extends Subject<Coordinates> {
  
  public getCoordinates(): Observable<Coordinates> {
    return this.asObservable().bufferCount(2).map(buffer => {
      return {first: buffer[0], second: buffer[1]};
    });
  }
  
}
