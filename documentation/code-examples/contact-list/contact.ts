export class Contact {
  
  public descr: string = this.name + ' ' + this.phone;
  
  constructor(public name: string, public phone: string) {
  }
}
