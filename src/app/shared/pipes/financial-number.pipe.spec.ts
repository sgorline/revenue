import { FinancialNumberPipe } from './financial-number.pipe';

describe('FinancialNumberPipe', () => {

  it('should create an instance', () => {
    const pipe = new FinancialNumberPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return real number when input is valid', () => {
    const pipe = new FinancialNumberPipe();
    // thousands
    expect(pipe.transform('.03k')).toBe('30');
    expect(pipe.transform('10.9k')).toBe('10,900');
    expect(pipe.transform('250K')).toBe('250,000');
    expect(pipe.transform('367642242347242462672422k')).toBe('367,642,242,347,242,440,000,000,000');
    // millions
    expect(pipe.transform('10m')).toBe('10,000,000');
    expect(pipe.transform('.45M')).toBe('450,000');
    expect(pipe.transform('0.44m')).toBe('440,000');
    expect(pipe.transform('667000000m')).toBe('667,000,000,000,000');
    // billions
    expect(pipe.transform('.5b')).toBe('500,000,000');
    expect(pipe.transform('0.9b')).toBe('900,000,000');
    expect(pipe.transform('0.250b')).toBe('250,000,000');
    expect(pipe.transform('425.3756765B')).toBe('425,375,676,500');
  });

  it('should return \'Not a valid financial number\' when input is invalid', () => {
    const pipe = new FinancialNumberPipe();
    const str = 'Not a valid financial number';
    expect(pipe.transform('')).toBe(str);
    expect(pipe.transform('0')).toBe(str);
    expect(pipe.transform('Ok')).toBe(str);
    expect(pipe.transform('steve')).toBe(str);
    expect(pipe.transform('10n')).toBe(str);
    expect(pipe.transform('bb')).toBe(str);
    expect(pipe.transform('100,000')).toBe(str);
    expect(pipe.transform('424b67')).toBe(str);
    expect(pipe.transform('-2k')).toBe(str);
    expect(pipe.transform('79828482711712891287')).toBe(str);
    expect(pipe.transform('12.3bB')).toBe(str);
    expect(pipe.transform('-42')).toBe(str);
  });

});
