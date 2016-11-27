import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {TreeNode} from './tree-node';
import {Store} from './redux/store';
import {TreeNodeService} from './tree-node.service';
import {Subscription} from 'rxjs';

@Component({
  template: require('./views/tree-view.html'),
  selector: 'lazy-tree-view'
})

export class LazyTreeViewComponent implements OnInit, OnDestroy {
  
  @Input() public root: TreeNode;
  public children: any;
  public items: Array<TreeNode>;
  public subscription: Subscription;
  
  constructor(private _store: Store, private _treeNodeService: TreeNodeService) {
    this.items = [];
  }
  
  public ngOnInit() {
    this.subscription = this._store.getTreeNodes(this.root.key).subscribe((res: TreeNode[]) => {
      this.items = res;
    });
    this._treeNodeService.loadTreeNodes(this.root);
  }
  
  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
