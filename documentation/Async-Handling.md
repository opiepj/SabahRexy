# Async Handling RxJS

For those not familiar with **Functional Reactive Programming (FRP)**, 
FRP is a programming paradigm we use in both the UI and Worker Layer. 
The pattern is a way for us to handle Async events and treat them as 
streams rather than arbitrary promises. The library we use is 
**RxJs (Reactive Extensions JS)** -- a popular library that Google uses 
within the Angular 2 framework. Since we are using it in the UI layer, 
we've decided to use it for the Worker layer as well for simplicity.

Since we are using RxJS that means we are **not using Promises**. Avoid
using promises unless specified by architecture.

## RxJs Basics

There are many classes that RxJs includes, but generally for simple
operations we will be only discussing the following:

* Observables: Represents a push based collection.
* Observers: Provides support for push-style iteration over an 
observable sequence.
* Subscriptions: Records information about subscriptions to and 
un-subscriptions from observable sequences.
* Subjects: Represents an object that is both an observable sequence as 
well as an observer. Each notification is broadcasted to all subscribed 
observers.

In Angular 2, the `Http` module will always return a an Observable.
**Observables** can be **Subscribe** to for handling returned data.

For example:

    ```js
    this.http.get('http://someurl.com/api').subscribe((res:Response) => {
        console.log(res);
    });
    ```
    
If you're coming from a promise background then this would look familiar. 
Instead of `.then` to a `promise` to wait for a response, we use 
`.subscribe` to a `observable` to stream a collection of events.

Instead of waiting for the entire response to complete you can actually 
start functioning the second you are getting a response from the server.

## Promises

RxJs does allow you to turn your Observable into a promise with the 
`.toPromise()`. **Avoid** using this pattern as much as possible. If
the app under performs, you might end up in a situation where your code is
the culprit. Do not put yourself in those situations, also it's good 
practice to stick with the standard.
