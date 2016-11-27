import {KeyMap} from './key-map';
import {Row} from './row';
import {Column} from './column';

export class SpreadsheetModel {
  
  private _rows: Array<Row>;
  private _current: Column;
  private _start: number;
  private _end: number;
  
  constructor(public rowCount, public columnCount) {
    
    this._rows = [];
    this._start = 0;
    this._end = rowCount;
    
    for (let i = 0; i < this.rowCount; i++) {
      
      this._rows.push(new Row(i, this.columnCount));
    }
    
    this._current = this._rows[0].columns[0];
  }
  
  public selectColumn(col) {
    this._current = col;
  }
  
  public navigate(keyCode) {
    
    const navDirection = KeyMap.getNavigationDirection(keyCode);
    
    if (navDirection.down) {
      this.ensureRow();
      this._current = this._rows[this._current.rowIndex + 1].columns[this._current.columnIndex];
      this.adjustRowRangeDownward();
    }
    if (navDirection.up) {
      if (this._current.rowIndex === 0) {
        return;
      }
      this._current = this._rows[this._current.rowIndex - 1].columns[this._current.columnIndex];
      this.adjustRowRangeUpward();
    }
    if (navDirection.left) {
      if (this._current.columnIndex === 0) {
        return;
      }
      this._current = this._rows[this._current.rowIndex].columns[this._current.columnIndex - 1];
    }
    if (navDirection.right) {
      if (this._current.columnIndex === this.columnCount - 1) {
        return;
      }
      this._current = this._rows[this._current.rowIndex].columns[this._current.columnIndex + 1];
    }
    if (navDirection.tab) {
      
      if (this._current.columnIndex === this.columnCount - 1) {
        this.ensureRow();
        this._current = this._rows[this._current.rowIndex + 1].columns[0];
        this.adjustRowRangeDownward();
      }
      else {
        this._current = this._rows[this._current.rowIndex].columns[this._current.columnIndex + 1];
      }
    }
  }
  
  public adjustRowRangeUpward() {
    if (this._current.rowIndex < this._start) {
      this.shiftRowsBy(-1);
    }
  }
  
  public adjustRowRangeDownward() {
    if (this._current.rowIndex === this._end) {
      this.shiftRowsBy(1);
    }
  }
  
  public shiftRowsBy(offset) {
    this._start = this._start + offset;
    this._end = this._end + offset;
  }
  
  public ensureRow() {
    if (this._current.rowIndex + 1 >= this._rows.length) {
      this._rows.push(new Row(this._current.rowIndex + 1, this.columnCount));
    }
  }
  
  public get end(): number {
    return this._end;
  }
  
  public get start(): number {
    return this._start;
  }
  
  public get current(): Column {
    return this._current;
  }
  
  public get rows(): Array<Row> {
    return this._rows;
  }
  
}



