import { Cpf } from "./cpf";

/**
 * Validates a CPF entity
 * @param cpf Cpf document which should be validated.
 */
export function isCpfValid(cpf: Cpf): boolean {
  const cpfAsString = cpf.toString();

  if (cpfAsString.length !== 11 || /^(\d)\1+$/.test(cpfAsString)) {
    return false;
  }

  let sum: number;
  let remainder: number;

  // Validate the first verification digit
  sum = 0;
  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cpfAsString.substring(i - 1, i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }
  if (remainder !== parseInt(cpfAsString.substring(9, 10))) {
    return false;
  }

  // Validate the second verification digit
  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cpfAsString.substring(i - 1, i)) * (12 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }
  if (remainder !== parseInt(cpfAsString.substring(10, 11))) {
    return false;
  }

  return true;
}
