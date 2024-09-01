import { AfterViewInit,ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements OnInit, AfterViewInit {

  @ViewChild('revenueForm', { static: true }) revenueForm: NgForm;
  @ViewChild('revenueInput', { static: true }) revenueInput: ElementRef;

  // ---------- PUBLIC MEMBERS ---------- //

  public revenue: string = '';

  // ---------- PRIVATE MEMBERS ---------- //



  constructor(
    private router: Router
  ) {

  }

  // ---------- LIFECYCLE HOOKS ---------- //

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.revenueInput?.nativeElement?.focus();
  }

  // ---------- PUBLIC METHODS ---------- //

  public submit(): void {
    if (this.revenue && this.revenueForm.valid) {
      this.router.navigate(['/financials/output'], { state: { revenue: this.revenue.toLowerCase() } });
    }
  }

  public validateInput(): void {
    if (this.revenue?.length >= 2) {
      const beginning = Number(this.revenue.slice(0, -1));
      const lastChar = this.revenue.slice(-1);
      if (isNaN(beginning) || beginning <= 0 || !['k', 'm', 'b'].includes(lastChar.toLowerCase())) {
        this.revenueForm.controls['revenue'].setErrors({ 'invalid': true });
      }
    }
  }

  // ---------- PRIVATE METHODS ---------- //



}
