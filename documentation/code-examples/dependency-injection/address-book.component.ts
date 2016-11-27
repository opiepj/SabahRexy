import {Component} from '@angular/core';
import {Injectable} from '@angular/core';
import {AddressBookService, Person} from './address-book.service';

@Component({
  selector: 'address-book',
  template: require('./views/address-book.html'),
  providers: [AddressBookService] // Put this in your module not component, component doesn't support providers anymore
})

export class AddressBookComponent {
  
  private _result: {people: Array<Person>};
  private _title: string;
  
  constructor(private addressBookService: AddressBookService) {
    console.log('Creating AddressBook');
    this._result = {people: []};
    addressBookService.getEntries().subscribe(res => this._result = res);
  }
  
  public get title(): string {
    return this._title;
  }
  
  public get result(): {people: Array<Person>} {
    return this._result;
  }
}
