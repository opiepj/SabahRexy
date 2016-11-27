import {Subject, Subscription} from 'rxjs';
import {Injectable} from '@angular/core';

let hasOwnProp = {}.hasOwnProperty;

@Injectable()
export class StreamEmitter {
  
  public subjects: {[name: string]: Subject<any>};
  
  private static createName(name): string {
    return `$${name}`;
  }
  
  constructor() {
    this.subjects = {};
  }
  
  public emit(name: string, data: any): void {
    let fnName = StreamEmitter.createName(name);
    if (!this.subjects[fnName]) {
      this.subjects[fnName] = new Subject();
    }
    this.subjects[fnName].next(data);
  }
  
  public listen(name, handler): Subscription {
    let fnName = StreamEmitter.createName(name);
    if (!this.subjects[fnName]) {
      this.subjects[fnName] = new Subject();
    }
    return this.subjects[fnName].subscribe(handler);
  }
  
  public dispose(): void {
    let subjects = this.subjects;
    for (let prop in subjects) {
      if (hasOwnProp.call(subjects, prop)) {
        subjects[prop].unsubscribe();
      }
    }
    this.subjects = {};
  }
  
}
