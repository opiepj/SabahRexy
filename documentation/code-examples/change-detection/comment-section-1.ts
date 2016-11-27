import {Component, ChangeDetectionStrategy} from '@angular/core';
import {BaseComment} from './base-comment';

@Component({
  template: require('./views/change-detection.html'),
  selector: 'comment-section-1',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CommentSection1Component extends BaseComment {
  constructor() {
    super();
    this.message = 'Using ChangeDetectionStrategy.OnPush';
  }
}
