export class QuestionBase<T> {
  public value: T;
  public key: string;
  public text: string;
  public required: boolean;
  public order: number;
  public controlType: string;
}
