export class Directory {
  
  private _expanded: boolean;
  private _checked: boolean;
  
  constructor(public name: string,
              public directories: Array<Directory>,
              public files: Array<string>) {
    this._expanded = true;
    this._checked = false;
  }
  
  public get expanded(): boolean {
    return this._expanded;
  }
  
  public get checked(): boolean {
    return this._checked;
  }
  
  public toggle(): void {
    this._expanded = !this._expanded;
  }
  
  public getIcon(): string {
    
    if (this._expanded) {
      return '-';
    }
    
    return '+';
  }
  
  public check(): void {
    this._checked = !this._checked;
    this.checkRecursive(this._checked);
  }
  
  private checkRecursive(state: boolean): void {
    this.directories.forEach(d => {
      d._checked = state;
      d.checkRecursive(state);
    });
  }
}
