import {Component} from '@angular/core';

/**
 * Having a root component to your module is completely optional. It's always a good habit to do this since just in case
 * you want to add overlays in the future like for example the navbar and custom footer.
 */

@Component({
  selector: 'reference',
  template: `
<div class="container">
    <navbar></navbar>
    <router-outlet></router-outlet>
    <sabah-footer></sabah-footer>
</div>`
})
export class ReferenceComponent {
  
  constructor() {
  }
  
}
