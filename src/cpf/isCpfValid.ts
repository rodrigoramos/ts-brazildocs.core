import { Cpf } from "./cpf";

/**
 * Validates a CPF entity
 * @param cpf Cpf document which should be validated.
 */
export function isCpfValid(cpf: Cpf): boolean {
  const strCPF = cpf.toString();
  if (strCPF == "00000000000" || strCPF.length != 11) return false;

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
