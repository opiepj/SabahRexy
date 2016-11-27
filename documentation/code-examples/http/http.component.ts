import {Component} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import {Person, Country, CountryInfo, Friends, Customer, Contract, Friend} from './http';

@Component({
  template: require('./views/http.html')
})
export class HttpSampleComponent {
  
  // @TODO switch these to private
  
  public result: {friends: Array<Friend>};
  public combined: {friends?: Array<Friend>, customer?: Customer};
  public error: Error;
  public contract: Contract;
  public customer: Customer;
  public postResponse: Person;
  public friendsAsPromise: Friends;
  public capitol: Country;
  public activeCountry: Country;
  public country: Subject<Country>;
  
  constructor(private http: Http) {
    this.postResponse = new Person();
    this.country = new Subject<Country>();
    
    this.loadFriendsSuccessFully();
    this.loadFriendsWithError();
    this.loadContractByCustomer();
    this.loadFriendsAndCustomers();
    this.loadFriendsAsPromise();
    this.getCapitol();
  }
  
  private getCapitol() {
    
    this.country.switchMap((country) => this.http.get('./data/country-info/' + country + '.json'))
      .map((res: Response) => res.json())
      .subscribe((res: CountryInfo) => this.capitol = res.capitol);
  }
  
  private isActive(country: Country) {
    return this.activeCountry === country;
  }
  
  private loadFriendsAsPromise() {
    this.friendsAsPromise = {};
    this.http.get('./friends.json').toPromise()
      .then((res: Response) => {
        this.friendsAsPromise.friends = res.json().friends;
      });
  }
  
  private loadFriendsAndCustomers() {
    this.combined = {};
    Observable.forkJoin(
      this.http.get('./friends.json').map((res: Response) => res.json()),
      this.http.get('./customer.json').map((res: Response) => res.json())
    ).subscribe((res: Array<any>) => this.combined = {friends: res[0].friends, customer: res[1]});
  }
  
  private loadFriendsSuccessFully() {
    this.result = {friends: []};
    this.http.get('./friends.json').map((res: Response) => res.json()).subscribe((res: Friends) => this.result = res);
  }
  
  private loadContractByCustomer() {
    this.http.get('./customer.json').map((res: Response) => {
      this.customer = res.json();
      return this.customer;
    })
      .flatMap((customer: Customer) => {
        this.http.get(customer.contractUrl);
      }).map((res: Response) => res.json())
      .subscribe((res: Contract) => this.contract = res);
  }
  
  private loadFriendsWithError() {
    this.result = {friends: []};
    this.http.get('./friends2.json').map((res: Response) => res.json()).subscribe(
      (res: any) => {
        this.result = res;
      },
      (error: Error) => {
        this.error = error;
      });
    
  }
  
  private postData() {
    
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    this.http.post('http://www.someurl.com/poc-post/', {firstName: 'Joe', lastName: 'Smith'}, {headers: headers})
      .map((res: Response) => res.json())
      .subscribe((res: Person) => this.postResponse = res);
  }
}


