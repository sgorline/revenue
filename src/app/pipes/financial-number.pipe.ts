import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'financialNumber',
  standalone: true
})
export class FinancialNumberPipe implements PipeTransform {

  transform(value: string): string {
    const multipliers: { [key: string]: number } = {
      k: 1000,
      m: 1000000,
      b: 1000000000
    };
    const multi = multipliers[value.slice(-1).toLowerCase()];
    const num = (Number(value.slice(0, -1)) * multi);
    return multi && !isNaN(num) && num > 0 ? (num).toLocaleString().toString() : 'Not a valid financial number';
  }

}
