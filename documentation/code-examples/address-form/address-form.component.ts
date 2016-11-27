import {Component} from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import {PayLoad} from './address-form';
import {zipValidator} from './zip-validator';


@Component({
  selector: 'address-form',
  template: require('./views/address-form.html')
})
export class AddressFormComponent {
  
  
  private _form: FormGroup;
  private _payLoad: PayLoad;
  
  constructor() {
    this._payLoad = null;
    let group: any = {};
    group.firstName = new FormControl('', Validators.required);
    group.streetAddress = new FormControl('', Validators.required);
    group.zip = new FormControl('', zipValidator);
    group.type = new FormControl('home');
    
    this._form = new FormGroup(group);
  }
  
  public onSubmit() {
    this._payLoad = JSON.stringify(this._form.value);
  }
  
  public get payLoad(): PayLoad {
    return this._payLoad;
  }
  
  public get form(): FormGroup {
    return this._form;
  }
  
}
