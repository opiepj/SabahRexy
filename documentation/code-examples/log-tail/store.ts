import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

import {LogAction} from './log-action';
import {LogEntry} from './log-entry';
import {logReducer} from './log-reducer';

export class Store {
  
  private _dispatcher: Subject<LogAction>;
  private _log: Subject<Array<LogEntry>>;
  private _logEntries: Observable<any>;
  private _logItems: Array<any>;
  
  constructor() {
    this._logItems = [];
    this._dispatcher = new Subject<LogAction>();
    this._log = new Subject<Array<LogEntry>>();
    this._dispatcher.subscribe((action) => this.handleAction(action));
    this._logEntries = this._log.asObservable();
  }
  
  public dispatchAction(action) {
    this._dispatcher.next(action);
  }
  
  private handleAction(action) {
    this._logItems = logReducer(this._logItems, action);
    this._log.next(this._logItems);
  }

}
