import {Component, OnInit} from '@angular/core';
import {TreeNode} from './tree-node';
import {Store} from './redux/store';
import {TreeNodeService} from './tree-node.service';

@Component({
  selector: 'country-demo',
  template: `<h1>Lazy loaded TreeView using Redux and RxJs</h1>
            <lazy-tree-view [root]="getNode()"></lazy-tree-view>`
})

export class CountryDemoComponent implements OnInit {
  private _node: TreeNode = null;
  
  public ngOnInit() {
    this._node = new TreeNode('root', './tree-view-data/countries.json', '');
  }
  
  public getNode(): TreeNode {
    return this._node;
  }
}
