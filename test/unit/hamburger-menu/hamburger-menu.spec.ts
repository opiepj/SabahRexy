// @WARNING Do not disable Tslint for anything except long import statements. Disabling can break production builds.
import {inject, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HamburgerMenuComponent} from 'app/src/common/components/hamburger-menu/hamburger-menu.component';

// Globals
/*
//Hamburger Menu has been removed
describe('Hamburger Menu Tests', () => {
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule],
      providers: [
        HamburgerMenuComponent,
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

  it('Hamburger Menu - ensure active is set to false', inject([HamburgerMenuComponent],
    (menu: HamburgerMenuComponent) => {
      let active: boolean = menu.active;
      expect(active).toBe(false);
  }));

});

*/
