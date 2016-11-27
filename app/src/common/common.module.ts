import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';

// Components
import {NavbarComponent} from 'app/src/common/components/navbar/navbar.component';
import {LoginComponent} from 'app/src/common/components/login/login.component';
import {HamburgerMenuComponent} from 'app/src/common/components/hamburger-menu/hamburger-menu.component';
import {LoadingIndicatorComponent} from 'app/src/common/components/loading-indicator/loading-indicator.component';
import {OdometerComponent} from 'app/src/common/components/odometer/odometer.component';
import {CapitalizePipe} from 'app/src/common/pipes/capitalize.pipe';
import {FooterComponent} from 'app/src/common/components/footer/footer.component';

// Services
import {AuthService} from 'app/src/common/services/auth.service';
import {CommonService} from 'app/src/common/services/common.service';
import {StreamEmitter} from 'app/src/common/services/stream-emitter.service';
import {AwsSerivce} from 'app/src/common/services/aws.service';

// Routing (for login and navbar component)
import {routing} from 'app/src/root/app.router';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, HttpModule, routing
  ],
  providers: [AuthService, CommonService, StreamEmitter, AwsSerivce],
  declarations: [NavbarComponent, LoginComponent, HamburgerMenuComponent, LoadingIndicatorComponent, OdometerComponent,
  CapitalizePipe, FooterComponent],
  exports: [NavbarComponent, LoadingIndicatorComponent, OdometerComponent, CapitalizePipe, FooterComponent]
})
export class CustomCommonModule {
}
