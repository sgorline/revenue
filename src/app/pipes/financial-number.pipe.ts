import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'financialNumber',
  standalone: true
})
export class FinancialNumberPipe implements PipeTransform {

  transform(value: string): string {
    let transformedValue: string = value;
    const multipliers: { [key: string]: number } = {
      k: 1000,
      m: 1000000,
      b: 1000000000
    };
    const mult = multipliers[value.slice(-1)];
    transformedValue = mult ? (Number(value.slice(0, -1)) * mult).toLocaleString().toString() : 'Not a valid financial number';
    return transformedValue;
  }

}
