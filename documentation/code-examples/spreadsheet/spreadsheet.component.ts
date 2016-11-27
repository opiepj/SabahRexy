import {Component, AfterViewChecked, Input} from '@angular/core';
import {SpreadsheetModel} from './spreadsheetModel';
import {KeyMap} from './key-map';
import {HeaderRowService} from './header-row.service';
import {Row} from './row';

@Component({
  selector: 'spreadsheet',
  template: require('./spreadsheet.html')
})

export class SpreadsheetComponent implements AfterViewChecked {
  
  @Input() public rows: Number;
  @Input() public columns: Number;
  private model: SpreadsheetModel;
  private header: any[];
  private visibleRows: Row[];
  
  constructor() {
    this.header = [];
    this.visibleRows = [];
    this.model = new SpreadsheetModel(10, 4);
    this.header = HeaderRowService.createHeader(this.model.rows[0].columns.length);
    this.visibleRows = this.getVisibleRows();
  }
  
  public getHeader() {
    return HeaderRowService.createHeader(this.model.rows[0].columns.length);
  }
  
  public navigate($event) {
    this.model.navigate($event.keyCode);
    this.visibleRows = this.getVisibleRows();
  }
  
  public ngAfterViewChecked() {
    let cell = document.getElementById(this.model.current.rowIndex + '-' + this.model.current.columnIndex);
    cell.focus();
  }
  
  public getVisibleRows() {
    return this.model.rows.filter((row) => row.rowIndex >= this.model.start && row.rowIndex < this.model.end);
  }
  
  public getActive(col) {
    if (col === this.model.current) {
      return 'active-cell';
    }
  }
}
