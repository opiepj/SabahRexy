import {
  inject,
  TestBed
} from '@angular/core/testing';

// Load the implementations that should be tested
import {AppComponent} from 'app/src/root/app.component';
import {Calculator} from './calculator';


let calculator = new Calculator();

describe('Calculator Tests', () => {
  // provide our implementations or mocks to the dependency injector
  
  beforeEach(() => {
    
  });
  
  it('Calculator - addition check', () => {
    let x = calculator.add(4, 3);
    expect(x).toBe(7);
    
    let y = calculator.add(10, 5);
    expect(y).toBe(15);
  });
  
  it('Calculator - subtraction check', () => {
    let x = calculator.substract(4, 3);
    expect(x).toBe(1);
  });
  
  it('Calculator - multiplication check', () => {
    let x = calculator.multiply(4, 3);
    expect(x).toBe(12);
  });
  
  it('Calculator - division check', () => {
    let x = calculator.divide(4, 3);
    expect(x).toBe(1.3333333333333333);
  });
  
});
