import {Component} from '@angular/core';
import {Contact} from './contact';

@Component({
  selector: 'contact-list',
  template: require('./views/contact-list.html')
})

export class ContactListComponent {
  
  private _contacts: Array<Contact> = [];
  
  public addContact(name, phone) {
    const contact: Contact = new Contact(name.value, phone.value);
    this._contacts.push(contact);
    name.value = '';
    phone.value = '';
  }
  
  public removeContact(contact) {
    const index: number = this._contacts.indexOf(contact);
    this._contacts.splice(index, 1);
  }
  
  public get contacts(): Array<Contact> {
    return this._contacts;
  }
}
