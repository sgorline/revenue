import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FinancialNumberPipe } from '../../pipes/financial-number.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [FinancialNumberPipe, RouterLink],
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutputComponent implements OnInit {

  // ---------- PUBLIC MEMBERS ---------- //

  public revenue: string = '';

  // ---------- PRIVATE MEMBERS ---------- //



  constructor(
    
  ) {

  }

  // ---------- LIFECYCLE HOOKS ---------- //

  ngOnInit(): void {
    this.revenue = history.state?.revenue;
  }

  // ---------- PUBLIC METHODS ---------- //



  // ---------- PRIVATE METHODS ---------- //



}
