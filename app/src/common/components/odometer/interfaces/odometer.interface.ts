import {ElementRef} from '@angular/core';

export declare class OdometerClass {
  
  constructor(options: OdometerI);
  
  public update(value: number);
  
}

export interface OdometerI {
  el: ElementRef;
  value: number;
  format: string;
  theme: string;
}
