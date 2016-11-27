// @WARNING Do not disable Tslint for anything except long import statements. Disabling can break production builds.
import {inject, TestBed, ComponentFixture} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {ProductCardComponent} from 'app/src/modules/dashboard/components/product-card/product-card.component';
import {DashboardModule} from 'app/src/modules/dashboard/dashboard.module';
import {AppModule} from 'app/src/root/app.module';
import {DebugElement} from '@angular/core';
import {ProductService} from 'app/src/modules/dashboard/services/products.service';
import {Product} from 'app/src/core/interfaces/product.interface';

// Globals
let comp: ProductCardComponent;
let fixture: ComponentFixture<ProductCardComponent>;
let de: DebugElement;
let el: HTMLElement;
describe('Product Card Tests', () => {
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DashboardModule, AppModule],
      providers: [
        ProductCardComponent,
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    });
  });
  
  it('ProductCard - toggleModal toHaveBeenCalled verification', inject([ProductCardComponent],
    (productCard: ProductCardComponent) => {
      spyOn(productCard, 'toggleModal');
      productCard.toggleModal();
      expect(productCard.toggleModal).toHaveBeenCalled();
    }));
  
  it('ProductCard - ensure modal is set to false', inject([ProductCardComponent],
    (productCard: ProductCardComponent) => {
      let modalState: boolean = productCard.showModal;
      expect(modalState).toBe(false);
    }));
  
  it('ProductCard - ensure minutes', inject([ProductCardComponent, ProductService],
    (productCard: ProductCardComponent, productService: ProductService) => {
      let mock: Product = {
        'machineId': '4fa2bfa1-aae4-11e6-ad7a-85af623c25c2',
        'machineName': 'HT 010',
        'machineType': 'Haul Truck',
        'assignment': 'Maintenance',
        'fuel': '0.92',
        'avgPayload': '----',
        'imagePath': 'assets/images/haul-truck.png',
        'prevOperator': '{imagePath=assets/images/tom_bluth.png, firstName=Tom, lastName=Bluth}'
      };
      
      expect(productCard).toBeDefined();
      productCard.product = mock;
      productCard.hours = productCard.calculateHours();
      let val1 = productCard.hours;
      let val2 = Math.round(productService.calculateTime(productCard.product.fuel).minutesTotal);
      expect(val1).toEqual(val2);
    }));
  
});
