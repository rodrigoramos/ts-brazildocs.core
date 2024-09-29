/**
 * Validates a CPF entity
 * @param cpf Cpf document which should be validated.
 */
export function isCpfValid(cpf: Cpf): boolean {
  const strCPF = cpf.toString();
  if (strCPF == '00000000000' || strCPF.length != 11) return false;

  let sumOfFirst9Digits: number = 0;
  for (let i = 0; i < 9; i++)
    sumOfFirst9Digits += parseInt(strCPF.substring(i, i + 1)) * (10 - i);

  let remainder = (sumOfFirst9Digits * 10) % 11;

  if (remainder == 10 || remainder == 11) remainder = 0;
  if (remainder != parseInt(strCPF.substring(9, 10))) return false;

  let sumOfFirst10Digits = 0;
  for (let i = 0; i < 10; i++)
    sumOfFirst10Digits =
      sumOfFirst9Digits + parseInt(strCPF.substring(i, i + 1)) * (11 - i);

  remainder = (sumOfFirst10Digits * 10) % 11;

  if (remainder == 10 || remainder == 11) remainder = 0;
  if (remainder != parseInt(strCPF.substring(10, 11))) return false;
  return true;
}

/**
 * Represents a CPF (Brazilian document)
 */
export class Cpf {
  private cpf: string = '';

  /**
   * Builds a new CPF object from a string or a number.
   * @returns A new CPF object
   */
  constructor(cpf: string | number) {
    let cpfAsString = typeof cpf === 'number' ? cpf.toString() : cpf;

    if (!cpf) return;
    cpfAsString = cpfAsString.padStart(11, '0');

    this.cpf = cpfAsString;
  }

  /**
   * Returns the CPF's number
   */
  public toString(): string {
    return this.cpf;
  }

  /**
   * Returns the CPF's number in the format 999.999.999-99.
   */
  public toFormattedString(): string {
    return this.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  /**
   * Returns the CPF's number as a number.
   */
  public asNumber(): number {
    return parseInt(this.cpf, 10);
  }

  /**
   * Returns whether the CPF is valid.
   */
  public isValid(): boolean {
    return isCpfValid(this);
  }
}
