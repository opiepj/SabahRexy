import {QuestionBase} from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
  
  public type: string;
  public controlType = 'textbox';
  
  constructor() {
    super();
  }
  
}
