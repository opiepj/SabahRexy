import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';

// Modules
import {CustomCommonModule} from 'app/src/common/common.module';

// Components
import {HomeComponent} from 'app/src/modules/reference/pages/home/home.component';
import {AboutComponent} from 'app/src/modules/reference/pages/about/about.component';
import {ContactComponent} from 'app/src/modules/reference/pages/contact/contact.component';
import {ReferenceComponent} from 'app/src/modules/reference/reference.component';

// Services
import {ReferenceService} from 'app/src/modules/reference/services/reference.service';

// Routing
import {routing} from 'app/src/modules/reference/reference.router';

// Bootstrap the module
@NgModule({
  
  // Modules and routing modules go here
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HttpModule, CustomCommonModule, routing],
  
  // Components, Directives, and Pipes go here
  providers: [ReferenceService],
  
  // Components, Directives, and Pipes go here
  declarations: [ReferenceComponent, HomeComponent, AboutComponent, ContactComponent],
})
export class ReferenceModule {
}
