import {Component, Input} from '@angular/core';
import {Insertion} from './insertion-sort';

@Component({
  selector: 'insertion-sort',
  template: require('./views/insertion-sort.html')
})

export class InsertionSortComponent {
  
  @Input() private _list: ValList;
  
  constructor() {
    this._list = new ValList();
    this._list.items = [
      new ListItem(5),
      new ListItem(33),
      new ListItem(5),
      new ListItem(5),
      new ListItem(2),
      new ListItem(-2),
      new ListItem(4),
      new ListItem(88),
      new ListItem(6),
      new ListItem(400),
      new ListItem(1),
      new ListItem(58),
      new ListItem(30)
    ];
    
  }
  
  public sortList() {
    Insertion.sort(this._list);
  }
}

class ValList {
  
  private _items: Array<ListItem>;
  
  public get items(): Array<ListItem> {
    return this._items;
  }
  
  public set items(value: Array<ListItem>) {
    this._items = value;
  }
  
  public setCurrent(item) {
    this.clearAll();
    item.current = true;
  }
  
  public clearAll() {
    this.items.forEach(i => i.current = false);
  }
}

class ListItem {
  
  private _val: Number;
  private _current: Boolean;
  
  constructor(val) {
    this.val = val;
    this.current = false;
  }
  
  public getClass() {
    if (this.current) {
      return 'current-item';
    }
    return null;
  }
  
  public get current(): Boolean {
    return this._current;
  }
  
  public set current(value: Boolean) {
    this._current = value;
  }
  
  public get val(): Number {
    return this._val;
  }
  
  public set val(value: Number) {
    this._val = value;
  }
}
