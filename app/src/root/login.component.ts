import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'app/src/common/services/auth.service';

let style = require('!!raw!sass!./views/login.scss');

@Component({
  selector: 'login',
  template: `
        <div class="wrapper">
            <form class="login" [class.loading]="loading" [class.ok]="complete">
                <p class="title">Log in</p>
                <input type="text" placeholder="Username" name="username" [(ngModel)]="username" autofocus/>
                <i class="fa fa-user"></i>
                <input type="password" placeholder="Password" name="password" [(ngModel)]="password" />
                <i class="fa fa-key"></i>
                <a href="#">Forgot your password?</a>
                <button (click)="login()">
                    <i class="spinner"></i>
                    <span class="state">Log in</span>
                </button>
            </form>
        </div>
        `,
  styles: [style]
})
export class LoginComponent implements OnInit {
  
  public username: string;
  public password: string;
  public loading: boolean;
  public complete: boolean;
  private _loadTime: number;
  
  constructor(private _authService: AuthService, private _router: Router) {
    this._loadTime = 4000;
    this.loading = false;
    this.complete = false;
  }
  
  public ngOnInit() {
  }
  
  public login(): void {
    let token: string = btoa(JSON.stringify({username: this.username, password: this.password}));
    this._authService.setToken(token);
    this.load();
  }
  
  private load(): void {
    this.loading = true;
    setTimeout(() => {
      this.redirect();
    }, this._loadTime / 2);
  }
  
  private redirect(): void {
    this.complete = true;
    setTimeout(() => {
      this._router.navigate(['/']);
    }, this._loadTime / 2);
  }
  
}
