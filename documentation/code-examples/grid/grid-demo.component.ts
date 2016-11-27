import {Component} from '@angular/core';
import {Column} from './column';
import {Person} from './grid';

@Component({
  template: '<grid name="person grid" [rows]="getPeople()" [columns]="getColumns()"></grid>'
})

export class GridDemoComponent {
  
  private _people: Array<Person>;
  private _columns: Array<Column>;
  
  constructor() {
    this._people = this.genPeople();
    this._columns = this.genColumns();
  }
  
  public getColumns(): Array<Column> {
    return this._columns;
  }
  
  public getPeople(): Array<Person> {
    return this._people;
  }
  
  private genPeople(): Array<Person> {
    return [
      {firstName: 'Joe', lastName: 'Jackson', age: 20},
      {firstName: 'Peter', lastName: 'Smith', age: 30},
      {firstName: 'Jane', lastName: 'Doe', age: 50},
      {firstName: 'Tim', lastName: 'Smith', age: 80}
    ];
  }
  
  private genColumns(): Array<Column> {
    return [
      new Column('firstName', 'First Name'),
      new Column('lastName', 'Last Name'),
      new Column('age', 'Age')
    ];
  }
  
}
