import {Component} from '@angular/core';

@Component({
  selector: 'ignore-bindings',
  template: `
               <h1>Ignoring Bindings</h1>

                <div>Ignored Binding:
                    <div ngNonBindable>{{10 * 10}}</div>
                </div>

                <div>
                    Executed Binding:
                    <div>{{10 * 10}}</div>
                </div>`
})

export class IgnoreBindingsComponent {
  
}
