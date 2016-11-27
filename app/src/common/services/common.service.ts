import {Injectable} from '@angular/core';

@Injectable()
export class CommonService {
  
  private _open: boolean;
  constructor() {
    this._open = false;
  }
  
  public toggleDrawer(): void {
    // this.drawerService.drawerChange.emit(true);
    // this.drawerService.toggleDrawer();
    this._open = !this._open;
  }
  
  public isOpen(): boolean {
    // return this.drawerService.isOpen();
    return this._open;
  }
  
  
  
}
