import {Column} from './column';

export class Row {
  
  private _columns: Array<Column>;
  
  constructor(public rowIndex, public columnCount) {
    this._columns = [];
    
    for (let j: number = 0; j < this.columnCount; j++) {
      this._columns.push(new Column(j, this.rowIndex));
    }
  }
  
  public get columns(): Array<Column> {
    return this._columns;
  }
  
  
}
