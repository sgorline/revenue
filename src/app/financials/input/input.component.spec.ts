import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { InputComponent, financialNumberValidator } from './input.component';

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

  it('should not set control to invalid if input is 250k', () => {
    const control = new FormControl('input');
    control.setValue('250k');
    expect(financialNumberValidator(control)).toBeNull();
  });

  it('should not set control to invalid if input is 10M', () => {
    const control = new FormControl('input');
    control.setValue('10M');
    expect(financialNumberValidator(control)).toBeNull();
  });

  it('should not set control to invalid if input is .5b', () => {
    const control = new FormControl('input');
    control.setValue('.5b');
    expect(financialNumberValidator(control)).toBeNull();
  });

  it('should not set control to invalid if input is 1.5b', () => {
    const control = new FormControl('input');
    control.setValue('1.5b');
    expect(financialNumberValidator(control)).toBeNull();
  });

  it('should set control to invalid if input is 25', () => {
    const control = new FormControl('input');
    control.setValue('25');
    expect(financialNumberValidator(control)).toEqual({ 'invalidFinancialNumber': true });
  });

  it('should set control to invalid if input is 100,345', () => {
    const control = new FormControl('input');
    control.setValue('100,345');
    expect(financialNumberValidator(control)).toEqual({ 'invalidFinancialNumber': true });
  });

  it('should set control to invalid if input is -2m', () => {
    const control = new FormControl('input');
    control.setValue('-2m');
    expect(financialNumberValidator(control)).toEqual({ 'invalidFinancialNumber': true });
  });

  it('should set control to invalid if input is 100mm', () => {
    const control = new FormControl('input');
    control.setValue('100mm');
    expect(financialNumberValidator(control)).toEqual({ 'invalidFinancialNumber': true });
  });

  it('should set control to invalid if input is 14t', () => {
    const control = new FormControl('input');
    control.setValue('14t');
    expect(financialNumberValidator(control)).toEqual({ 'invalidFinancialNumber': true });
  });

});
