import {Component} from '@angular/core';
let style = require('!!raw!sass!./views/navbar.scss');

@Component({
  selector: 'navbar',
  template: `
    <div class="header clearfix">
        <nav>
            <ul class="nav nav-pills float-xs-right">
                <li class="nav-item">
                    <a class="nav-link active" [routerLink]="['/reference/home']" [routerLinkActive]="['active']">
                        Home <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" [routerLink]="['/reference/about']" [routerLinkActive]="['active']">
                        About
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" [routerLink]="['/reference/contact']" [routerLinkActive]="['active']">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
        <h3 class="text-muted">Sabah Rexy</h3>
    </div>
`,
  styles: [style]
})
export class NavbarComponent {
  
  constructor() {
  }
}
