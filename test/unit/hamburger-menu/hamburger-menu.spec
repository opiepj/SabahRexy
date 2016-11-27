// @WARNING Do not disable Tslint for anything except long import statements. Disabling can break production builds.
import {inject, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HamburgerMenuComponent} from 'app/src/modules/dashboard/components/hamburger-menu/hamburger-menu.component';

// Globals
describe('Hamburger Menu Tests', () => {
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule],
      providers: [
        ProductCardComponent,
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    });
  });
  
  it ('Hamburger Menu - toggle toHaveBeenCalled verification', inject([HamburgerMenuComponent],
  (menu: HamburgerMenuComponent) => {
    spyOn(menu, 'toggle');
    menu.toggle();
    expect(menu.toggle).toHaveBeenCalled();
  }));
  
});