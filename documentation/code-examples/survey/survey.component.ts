import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {QuestionModel} from './question-model';
import {TextboxQuestion} from './textbox-question';

@Component({
  selector: 'survey',
  template: require('./views/survey.html')
})

export class SurveyComponent implements OnInit {
  
  @Input() private _model: any;
  private _form: FormGroup;
  private _payLoad: any;
  
  public ngOnInit() {
    this._payLoad = null;
    this._form = this._model.toGroup();
  }
  
  private onSubmit() {
    this._payLoad = JSON.stringify(this._form.value);
  }
}
