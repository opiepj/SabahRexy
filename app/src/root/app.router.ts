import {Routes, RouterModule}   from '@angular/router';
import {ModuleWithProviders}  from '@angular/core';
import {LoginComponent} from 'app/src/root/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'reference', pathMatch: 'full'},
  {path: 'login', component: LoginComponent}
];


/**
 * Routing Providers for the App
 * @type {Array}
 */
export const appRoutingProviders: any[] = [];

/**
 * Routes for the App
 * @type {ModuleWithProviders}
 */
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
