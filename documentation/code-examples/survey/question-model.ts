import {FormGroup, Validators, FormControl} from '@angular/forms';

export class QuestionModel {
  
  private _questions: any;
  
  public toGroup() {
    this._questions = [];
    let group: any = {};
    
    this._questions.forEach((question) => {
      if (question.required) {
        group[question.key] = new FormControl('', Validators.required);
      }
      else {
        group[question.key] = new FormControl('');
      }
    });
    
    return new FormGroup(group);
  }
  
  public get questions(): Array {
    return this._questions;
  }
}
