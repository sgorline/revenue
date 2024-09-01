import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './input.component';

describe('InputComponent', () => {

  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not set control to invalid if revenue length is less than 2', () => {
    component.revenueForm.controls['revenue'].setErrors({});
    component.revenue = 'b';
    component.validateInput();
    expect(component.revenueForm.controls['revenue'].errors?.['invalid']).toBeUndefined();
  });

  it('should not set control to invalid if input is 250k', () => {
    component.revenueForm.controls['revenue'].setErrors({});
    component.revenue = '250k';
    component.validateInput();
    expect(component.revenueForm.controls['revenue'].errors?.['invalid']).toBeUndefined();
  });

  it('should not set control to invalid if input is 10M', () => {
    component.revenueForm.controls['revenue'].setErrors({});
    component.revenue = '10M';
    component.validateInput();
    expect(component.revenueForm.controls['revenue'].errors?.['invalid']).toBeUndefined();
  });

  it('should not set control to invalid if input is .5b', () => {
    component.revenueForm.controls['revenue'].setErrors({});
    component.revenue = '.5b';
    component.validateInput();
    expect(component.revenueForm.controls['revenue'].errors?.['invalid']).toBeUndefined();
  });

  it('should not set control to invalid if input is 1.5b', () => {
    component.revenueForm.controls['revenue'].setErrors({});
    component.revenue = '1.5b';
    component.validateInput();
    expect(component.revenueForm.controls['revenue'].errors?.['invalid']).toBeUndefined();
  });

  it('should set control to invalid if input is 25', () => {
    component.revenueForm.controls['revenue'].setErrors({});
    component.revenue = '25';
    component.validateInput();
    expect(component.revenueForm.controls['revenue'].errors?.['invalid']).toBeTrue();
  });

  it('should set control to invalid if input is 100,345', () => {
    component.revenueForm.controls['revenue'].setErrors({});
    component.revenue = '100,345';
    component.validateInput();
    expect(component.revenueForm.controls['revenue'].errors?.['invalid']).toBeTrue();
  });

  it('should set control to invalid if input is -2m', () => {
    component.revenueForm.controls['revenue'].setErrors({});
    component.revenue = '-2m';
    component.validateInput();
    expect(component.revenueForm.controls['revenue'].errors?.['invalid']).toBeTrue();
  });

  it('should set control to invalid if input is 100mm', () => {
    component.revenueForm.controls['revenue'].setErrors({});
    component.revenue = '100mm';
    component.validateInput();
    expect(component.revenueForm.controls['revenue'].errors?.['invalid']).toBeTrue();
  });

  it('should set control to invalid if input is 14t', () => {
    component.revenueForm.controls['revenue'].setErrors({});
    component.revenue = '14t';
    component.validateInput();
    expect(component.revenueForm.controls['revenue'].errors?.['invalid']).toBeTrue();
  });

});
