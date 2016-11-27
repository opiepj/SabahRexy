import {Pipe, PipeTransform} from '@angular/core';

// Check if the value is supported for the pipe
export function isString(txt): boolean {
  return typeof txt === 'string';
}

// Simple example of a Pipe
@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  private _regexp: RegExp = /([^\W_]+[^\s-]*) */g;
  
  
  public transform(value: string, args?: Array<any>): any {
    return (!value) ? '' :
      (!args) ?
        this.capitalizeWord(value) :
        value.replace(this._regexp, this.capitalizeWord);
  }
  
  private supports(txt): boolean {
    return isString(txt);
  }
  
  private capitalizeWord(txt: string): string {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    
  }
  
}
