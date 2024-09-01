import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './input.component';

describe('InputComponent', () => {

  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call router.navigate if revenue is set and form is valid', () => {

  });

  it('should not call router.navigate if revenue is not set or form is invalid', () => {

  });

  it('should not set control to invalid if input is valid', () => {

  });

  it('should set control to invalid if input is invalid', () => {
    component.revenue = '250';
    component.validateInput();
    expect(component.revenueForm.controls['revenue'].errors).toEqual({ 'invalid': true });
  });

});
