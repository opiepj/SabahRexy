import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Store} from './store';
import {LogAction} from './log-action';
import {LogEntry} from './log-entry';
import {LogTailService} from './log-tail.service';

@Component({
  providers: [Store, LogTailService], // Put these providers in the module
  template: `<div>
                <h1>Error log state managed using Redux</h1>
                <button style="margin-bottom: 10px;" (click)="generateLogEntry()">Add new log entry</button>
                <input placeholder="message" type="text" [(ngModel)]="getMsg()" />
                <input placeholder="severity" type="number" [(ngModel)]="getSeverity()" />
                <table class="table">
                     <tr>
                        <td><strong>Message</strong></td><td><strong>Severity</strong></td>
                     </tr>
                     <tr *ngFor="let log of getStore().logEntries | async">
                        <td>{{log.text}}</td>
                        <td>{{log.severity}}</td>
                     </tr>
                </table>
              </div>`
})

export class LogDemoComponent implements OnInit {
  
  private _msg: string;
  private _severity: number;
  
  constructor(private _store: Store, private _logTailService: LogTailService) {
  }
  
  public generateLogEntry() {
    let entry = new LogEntry(this._msg, this._severity);
    this._store.dispatchAction(new LogAction('ADD_ENTRY', entry));
    this._msg = '';
    this._severity = undefined;
  }
  
  public ngOnInit() {
    this._logTailService.getLogEntries().subscribe((res) => {
      this._store.dispatchAction(new LogAction('LOAD_ENTRIES', res.entries));
    });
  }
  
  public getMsg(): string {
    return this._msg;
  }
  
  public getSeverity(): number {
    return this._severity;
  }
  
  public getStore(): Store {
    return this._store;
  }
  
}
