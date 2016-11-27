import {Component, Input, OnInit} from '@angular/core';
import {Column} from './column';
import {Sorter} from './sorter';
import {Person} from './grid';

@Component({
  selector: 'grid',
  template: require('./views/grid.html')
})

export class GridComponent implements OnInit {

  
  @Input() private _columns: Array<Column>;
  @Input() private _rows: Array<Person>;
  
  @Input() private _name: string;
  
  private _sorter: Sorter;
  
  public sort(key) {
    this._sorter = new Sorter();
    this._sorter.sort(key, this._rows);
  }
  
  public ngOnInit() {
    console.log(this._name);
  }
  
  public get name(): string {
    return this._name;
  }
  public get rows(): Array<Person> {
    return this._rows;
  }
  public get columns(): Array<Column> {
    return this._columns;
  }
  
  
}
