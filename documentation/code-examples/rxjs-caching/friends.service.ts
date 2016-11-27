import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/publishReplay';
import {Friend} from '../http/http';

@Injectable()
export class FriendsService {
  
  private _friends: Observable<Friend[]>;
  
  constructor(private _http: Http) {
    this._friends = null;
  }
  
  public clearCache() {
    this._friends = null;
  }
  
  public getFriends(): Observable<Friend[]> {
    if (!this._friends) {
      this._friends = this._http.get('./rxjs-caching/friends.json')
        .map((res: Response) => res.json().friends)
        .do(friends => console.log('fetched friends'))
        .publishReplay(1)
        .refCount();
    }
    return this._friends;
  }
}
