import {Component} from '@angular/core';
import {FriendsService} from './friends.service';

@Component({
  providers: [FriendsService],
  template: require('./views/caching-demo.html')
})
export class CachingDemoComponent {
  
  private _display: {first: boolean, second: boolean};
  
  constructor(private _friendsService: FriendsService) {
    this._display = {first: true, second: true};
  }
  
  private remove(list) {
    this._display[list] = false;
  }
  
  private reset() {
    this._display = {first: true, second: true};
  }
  
  private clearCache() {
    this._friendsService.clearCache();
  }
}
