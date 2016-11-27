export class TreeNode {
  private _showIcon: boolean;
  private _expanded: boolean;
  private _icon: string;
  
  constructor(public key, public url, public name) {
    this._showIcon = false;
    this._expanded = false;
    this._icon = null;
    if (url) {
      this._showIcon = true;
      this._icon = this.getIcon();
    }
  }
  
  public expand() {
    this._expanded = !this._expanded;
    this._icon = this.getIcon();
  }
  
  private getIcon() {
    if (this._showIcon === true) {
      if (this._expanded) {
        return '- ';
      }
      return '+ ';
      
    }
    return null;
  }
}
