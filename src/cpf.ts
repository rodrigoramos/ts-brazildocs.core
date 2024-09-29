import { isCpfValid } from "./isCpfValid";

/**
 * Represents a CPF (Brazilian document)
 */
export class Cpf {
  private cpf: string = "";

  /**
   * Builds a new CPF object from a string or a number.
   * @returns A new CPF object
   */
  constructor(cpf: string | number) {
    let cpfAsString = typeof cpf === "number" ? cpf.toString() : cpf;

    if (!cpf) return;
    cpfAsString = cpfAsString.padStart(11, "0");

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
    return this.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
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
