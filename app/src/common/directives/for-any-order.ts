import {
  ChangeDetectorRef,
  Directive,
  DoCheck,
  IterableDiffer,
  IterableDiffers,
  TemplateRef,
  ViewContainerRef,
  ViewRef, Input
} from '@angular/core';

class NgForRow {
  constructor(public $implicit: any) {
  }
}

@Directive({
  selector: '[forAnyOrder]',
})
export class ForAnyOrderDirective implements DoCheck {
  private collection: any;
  private differ: IterableDiffer;
  private viewMap: Map<any, ViewRef>;
  
  constructor(private changeDetector: ChangeDetectorRef,
              private differs: IterableDiffers,
              private template: TemplateRef<NgForRow>,
              private viewContainer: ViewContainerRef) {
    this.viewMap = new Map<any, ViewRef>();
  }
  
  @Input()
  public set forAnyOrderOf(coll: any) {
    this.collection = coll;
    if (coll && !this.differ) {
      this.differ = this.differs.find(coll).create(this.changeDetector);
    }
  }
  
  public ngDoCheck() {
    if (this.differ) {
      const changes = this.differ.diff(this.collection);
      if (changes) {
        changes.forEachAddedItem((change) => {
          const view = this.viewContainer.createEmbeddedView(this.template, new NgForRow(null));
          this.viewMap.set(change.item, view);
          view.context.$implicit = change.item;
        });
        changes.forEachRemovedItem((change) => {
          const view = this.viewMap.get(change.item);
          const viewIndex = this.viewContainer.indexOf(view);
          this.viewContainer.remove(viewIndex);
          this.viewMap.delete(change.item);
        });
      }
    }
  }
  
}
