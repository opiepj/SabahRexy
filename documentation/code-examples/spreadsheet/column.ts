export class Column {
  public cellValue: String;
  
  constructor(public columnIndex, public rowIndex) {
    this.cellValue = '';
  }
}
