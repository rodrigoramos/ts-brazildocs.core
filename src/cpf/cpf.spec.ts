import { Cpf } from "./cpf";

describe("Cpf", () => {
  describe("when building", () => {
    it("should be able to build using cpf as number", () => {
      const cpfAsNumber = 29652284033;
      expect(() => new Cpf(cpfAsNumber)).not.toThrow();
    });

    it("when building with cpf as number and with less the 11 chars, should be add zero at the left", () => {
      const startingZeroCpfAsNumber = 6509839040;
      const newCpf = new Cpf(startingZeroCpfAsNumber);
      expect(newCpf.toString()).toBe("06509839040");
    });

    it("should be able to build using cpf as string", () => {
      const cpfAsString = "29652284033";
      expect(() => new Cpf(cpfAsString)).not.toThrow();
    });
  });

  it("should return cpf as a string with no format when calling 'toString' method", () => {
    const cpf = new Cpf("29652284033");

    expect(cpf.toString()).toStrictEqual("29652284033");
  });

  it("should return cpf as a string and WITH format when calling 'toFormattedString' method", () => {
    const cpf = new Cpf("29652284033");

    expect(cpf.toFormattedString()).toStrictEqual("296.522.840-33");
  });

  it("should return cpf as a number when calling 'asNumber' method", () => {
    const cpf = new Cpf("29652284033");

    expect(cpf.asNumber()).toStrictEqual(29652284033);
  });
});
