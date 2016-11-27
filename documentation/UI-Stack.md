# UI Stack

This documentation serves to show what exactly makes this UI application.


 
There are **five** layers that make up this stack:

1. UI Layer
2. Worker Layer
3. Platform Layer
4. Devops Layer

## UI Layer

The UI Layer, like most of the other layers, is written in the **TypeScript**
language. All components are contained within the **Angular 2** framework.
For those unfamiliar with Angular 2 and familiar with Angular 1.0 you 
might find that they are relatively similar in philosophy but different 
in implementation. Angular 1.5 is more similar, but this documentation
will be comparing Angular 1.3 and Angular 2.0 going forward.

Angular 2 still uses the idea of dependency injection, similar to Spring.
It also still uses services and providers. However, components have 
replaced the use of controllers and models. The main difference of Angular
2 to Angular 1 is the object oriented approach and how uncoupled it is 
from the DOM. Angular 2 acts more like a Node app rather than a Browser 
App. Think of it as a developer builds containers, models, services, etc
-- the developer should not be concerned of the DOM as they are relying 
on Angular to do all the Browser DOM manipulation.

If we were to natively bind to a native mobile or desktop app, the 
application should be completely portable. Keep that in mind when 
building components. If your component is too coupled to the DOM, then 
contact architecture and ensure you add warnings specifying your 
component is not portable.

### UI Layer Stack

The UI is consisted of the following technologies

* Language: TypeScript
* Async Pattern: Rxjs
* UI Framework: Angular 2
* Component Library: PrimeNG
* UI Library: Bootstrap 4
* View: HTML + Angular Templating
* Styling: SCSS, PostCSS
* Test Framework: Jasmine

### Async Handling RxJS

For those not familiar with **Functional Reactive Programming (FRP)**, 
FRP is a programming paradigm we use in both the UI and Worker Layer. 
The pattern is a way for us to handle Async events as streams rather 
than arbitrary promises. The library we use is **RxJs (Reactive Extensions
JS)** -- a popular library that Google uses within the Angular 2 framework.
Since we are using it in the UI layer, we've decided to use it for the 
Worker layer as well for simplicity.

Since we are using RxJS that means we are **not using Promises**. Avoid
using promises unless specified by architecture.

## Worker Layer

The Worker Layer is apart of the application, but outside of the UI on a
separate thread. The purpose of the worker is do the following:
 
* Abstract the load of gathering data for the UI
* Support offline browsing
* Handle all application HTTP interactions
* Caching
* Circuit Breaker Detection

### Creating a Worker

As a developer you would create various worker events that do a 
particular function or operation. When you create a worker you must 
register it into the **Reactive Worker Factory** in 
`workers/reactive-worker/reactive-worker.factory.ts`. In the factory you
must do three things:

1. Extend your worker class with the abstract `ReactiveWorker` class and
create a `start` method with a input of `WorkerInput` and a output of
`WorkerOutput`.
2. Instantiate class. If your class requires PouchDB or Http, add the
singleton patterns.
3. Create a new `key` in the `REACTIVE_WORKERS` object and add the 
instantiated class to the `value` of the `key`
    * i.e 
      ```js
        // Platform classes (Don't Modify)
        import {RemoDatabase} from 'workers/database/remo-database';
        import {Http} from 'workers/http-handler/http';
        import {CircuitBreaker} from 'workers/circuit-breaker/circuit-breaker';
        
        // Import your class
        import {MySpecificWorker} from 'workers/reactive-worker/workers/my-specific-worker';
      
        // Providers (Don't Modify)
        let db: RemoDatabase = new RemoDatabase();
        let http: Http = new Http();
        let circuitBreaker: CircuitBreaker = new CircuitBreaker(db);
        
        // Instantiate your worker with whatever providers it needs
        let mySpecificWorker = new MySpecificWorker(http, db, circuitBreaker);
          
        // Export singleton factory
        export const REACTIVE_WORKERS: ReactiveWorkerFactory = {
            MySpecificEvent: mySpecificWorker
        }; 
      ```

### Providers

The Platform team has created various class providers you can use in your
worker. The available providers are:

* Http: This provider class is used to do all your Http requests for you.
* RemoDatabase: This provider works with PouchDB in helping you do all
your caching and cache retrieval.
* CircuitBreaker: This provider determines which state the user is in. 
The user can in the following states:
    * **Open**: If the user is in this state then there is nothing we can do,
    we'd return a error. Basically this state means the user is `offline`
    and has `no access to cache`.
    * **Closed**: If the user is in this state then it means that the user is
    `online` or has access to cache.
    * **Half**: The user in this state indicates that they are `offline`, but
    have `access to cache`.
    
Use these providers as tools to coordinate your worker. Don't reinvent 
the wheel and develop anything you don't have to... If these providers 
are not supporting your needs then engage the platform architecture team
and have them fix that for you.

### Worker Layer Stack

The UI is consisted of the following technologies

* Language: TypeScript
* Local DB: PouchDB
* Http: Rxjs.Ajax
* Async Pattern: RxJS
* Test Framework: Jasmine

## Platform Layer

The platform layer acts as the "framework" for the entire project. It 
consists of the following areas:

* Task Management: We use `gulp` as a task management tool which is 
aliased through `npm`.
* Module Bundling: The module bundler is the tool that "pulls" together
the application into a distributed package for either production or 
development. We use `webpack` to do this for us.
* Worker Providers: The platform team also develops the tools/providers
for the workers so that the workers can scale and not rely on monolithic
approaches.
* Linting: `tslint`
* Documentation: `tsdoc`

## Devops Layer

The devops layer consumes the platforms tasks. Therefore the platform 
team is responsible for providing any necessary tasks needed for the 
devops team to do their job.
