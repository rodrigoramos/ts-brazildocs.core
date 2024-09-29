import { Cpf } from "./cpf";
import { isCpfValid } from "./isCpfValid";

describe("isValidCpf", () => {
  it("should be invalid when CPF is 00000000000", () => {
    const allZeroCpf = new Cpf("00000000000");

    expect(isCpfValid(allZeroCpf)).toBe(false);
  });

  it("should be invalid if lenght is lower than 11", () => {
    const cpfWith10Digits = new Cpf("1234567891");

    expect(isCpfValid(cpfWith10Digits)).toBe(false);
  });

  it("should return true for valid CPF", () => {
    const validCpf = new Cpf("11728890748");

    expect(isCpfValid(validCpf)).toBe(true);
  });

  it("should return false for valid CPF", () => {
    const invalidCpf = new Cpf("24554868010");

    expect(isCpfValid(invalidCpf)).toBe(false);
  });
});
