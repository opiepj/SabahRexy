import {Component, OnInit, OnDestroy} from '@angular/core';
import {FriendsService} from './friends.service';
import {Subscription} from 'rxjs/Subscription';

type Friend = any;

@Component({
  selector: 'friends-list',
  template: `
    <div *ngFor="let friend of getFriends()">
      {{friend}}
    </div>
    <button (click)="loadData()">Reload</button>
  `
})

export class FriendsListComponent implements OnInit, OnDestroy {
  
  private _friends: Array<Friend>;
  private _subscription: Subscription;
  
  constructor(private _friendsService: FriendsService) {
    this._friends = [];
  }
  
  public ngOnInit() {
    this.loadData();
  }
  
  public ngOnDestroy() {
    this._subscription.unsubscribe();
    console.log('Destroyed');
  }
  
  public getFriends(): Array<Friend> {
    return this._friends;
  }
  
  public loadData(): void {
    this._subscription = this._friendsService
      .getFriends()
      .subscribe(res => this._friends = res,
        error => console.log(error));
  }
}
