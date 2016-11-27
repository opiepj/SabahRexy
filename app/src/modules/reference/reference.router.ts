import {Routes, RouterModule}   from '@angular/router';
import {ModuleWithProviders}  from '@angular/core';
import {ReferenceComponent} from './reference.component';
import {HomeComponent} from 'app/src/modules/reference/pages/home/home.component';
import {AboutComponent} from 'app/src/modules/reference/pages/about/about.component';
import {ContactComponent} from 'app/src/modules/reference/pages/contact/contact.component';

const routes: Routes = [
  {path: 'reference', component: ReferenceComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
  ]},
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
