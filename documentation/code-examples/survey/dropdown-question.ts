import {QuestionBase} from './question-base';

export class DropDownQuestion extends QuestionBase<string> {
  
  public options = [];
  public controlType = 'dropdown';
  
  constructor() {
    super();
  }
}
