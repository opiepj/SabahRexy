export class Sorter {
  
  private _direction: number;
  private _key: string;
  
  constructor() {
    this._direction = 1;
  }
  
  public sort(key: string, data: any[]) {
    
    if (this._key === key) {
      this._direction = -this._direction;
    }
    else {
      this._direction = 1;
    }
    
    this._key = key;
    
    data.sort((a, b) => {
      if (a[key] === b[key]) {
        return 0;
      }
      else if (a[key] > b[key]) {
        return this._direction;
      }
      else {
        return -this._direction;
      }
    });
  }
  
}
