
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

export const financialNumberValidator = (control: AbstractControl): ValidationErrors | null => {
  const beginning = Number(control.value.slice(0, -1));
  const lastChar = control.value.slice(-1);
  if (isNaN(beginning) || beginning <= 0 || !['k', 'm', 'b'].includes(lastChar.toLowerCase())) {
    return { 'invalidFinancialNumber': true };
  } else {
    return null;
  }
};

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements AfterViewInit {

  @ViewChild('revenueInput', { static: true }) revenueInput: ElementRef;

  // ---------- PUBLIC MEMBERS ---------- //

  public revenueForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.revenueForm = this.formBuilder.group({
      revenue: ['', {
        validators: [
          financialNumberValidator,
          Validators.minLength(2),
          Validators.required,
        ]
      }]
    });
  }

  // ---------- LIFECYCLE HOOKS ---------- //

  ngAfterViewInit(): void {
    this.revenueInput?.nativeElement?.focus();
  }

  // ---------- PUBLIC METHODS ---------- //

  public submit(): void {
    if (this.revenueForm.controls['revenue'].value.length >= 2 && this.revenueForm.valid) {
      this.router.navigate(['/financials/output'], { state: { revenue: this.revenueForm.controls['revenue'].value.toLowerCase() } });
    }
  }

}
