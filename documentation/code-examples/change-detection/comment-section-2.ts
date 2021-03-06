import {Component, ChangeDetectionStrategy} from '@angular/core';
import {BaseComment} from './base-comment';

@Component({
  template: require('./views/change-detection.html'),
  selector: 'comment-section-2',
  changeDetection: ChangeDetectionStrategy.Default
})

export class CommentSection2Component extends BaseComment {
  constructor() {
    super();
    this.message = 'Using ChangeDetectionStrategy.Default';
  }
}
