import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class LogTailService {
  
  constructor(private http: Http) {
  }
  
  public getLogEntries(): Observable<Log> {
    return this.http.get('./components/log-tail/log.json').map((res: Response) => {
      res.json();
    });
  }
}

export interface Log {
  entries: Array<Entry>;
}

export interface Entry {
  text: string;
  severity: number;
}
