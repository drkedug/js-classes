const { calculadora } = require('../calculadora');

describe("calculadora", () => {
  it("should correctly sum single digit numbers", () => {
    const input1 = 3;
    const input2 = 5;
    const output = calculadora(input1, input2, "+");

    const result = 8;
    expect(output).toEqual(result);
  });
  
  it("should correctly sum double digit numbers", () => {
    const input1 = 35;
    const input2 = 95;
    const output = calculadora(input1, input2, "+");

    const result = 130;
    expect(output).toEqual(result);
  });

  it("should correctly detract single digit numbers", () => {
    const input1 = 5;
    const input2 = 3;
    const output = 2;

    const result = calculadora(input1, input2, "-");
    expect(output).toEqual(result);
  });

  it("should correctly detract numbers that become negative", () => {
    const input1 = 3;
    const input2 = 5;
    const output = calculadora(input1, input2, "-");

    const result = -2;
    expect(output).toEqual(result);
  });

  it("should correctly multiply numbers", () => {
    const input1 = 3;
    const input2 = 5;
    const output = calculadora(input1, input2, "*");

    const result = 15;
    expect(output).toEqual(result);
  });

  it("should correctly multiply numbers by 0", () => {
    const input1 = 3;
    const input2 = 0;
    const output = calculadora(input1, input2, "*");

    const result = 0;
    expect(output).toEqual(result);
  });

  it("should correctly divide numbers", () => {
    const input1 = 3;
    const input2 = 3;
    const output = calculadora(input1, input2, "/");

    const result = 1;
    expect(output).toEqual(result);
  });

  it("should correctly divide numbers by 0", () => {
    const input1 = 3;
    const input2 = 0;
    const output = calculadora(input1, input2, "/");

    const result = "cannot divide by 0!";
    expect(output).toEqual(result);
  });
});