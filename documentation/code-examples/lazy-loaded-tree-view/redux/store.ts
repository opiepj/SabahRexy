import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import {TreeNode} from '../tree-node';
import {treeNodeReducer} from './tree-node-reducer';

@Injectable()
export class Store {
  
  private _dispatcher: Subject<any>;
  private _treeNodes: any;
  private _nodes: any;
  
  constructor(private _http: Http) {
    this._dispatcher = new Subject<any>();
    this._treeNodes = {};
    this._nodes = {};
    this._dispatcher.subscribe((action) => this.handleAction(action));
  }
  
  public getTreeNodes(key): Observable<TreeNode[]> {
    if (!this._treeNodes.hasOwnProperty(key)) {
      this._treeNodes[key] = new Subject<Array<TreeNode>>();
    }
    return this._treeNodes[key].asObservable();
  }
  
  public dispatchAction(action) {
    this._dispatcher.next(action);
  }
  
  private handleAction(action): void {
    
    if (action.name === 'LOAD_NODES') {
      if (this._nodes[action.key]) {
        this._treeNodes[action.key].next(this._nodes[action.key]);
      }
      else {
        this._http
          .get(action.url)
          .map((res: Response) => res.json())
          .subscribe(res => {
            this._nodes[action.key] = treeNodeReducer(res, action);
            this._treeNodes[action.key].next(this._nodes[action.key]);
          });
      }
    }
  }
}
