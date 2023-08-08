const { calculadora } = require('../calculadora');

describe("calculadora", () => {
  it("correctly sum single digit numbers", () => {
    const input1 = 3;
    const input2 = 5;
    const input3 = "+";
    const output = calculadora(input1, input2, input3);

    const result = 8;
    expect(output).toEqual(result);
  });
  
  it("correctly sum double digit numbers", () => {
    const input1 = 35;
    const input2 = 95;
    const input3 = "+";
    const output = calculadora(input1, input2, input3);

    const result = 130;
    expect(output).toEqual(result);
  });

  it("correctly detract single digit numbers", () => {
    const input1 = 5;
    const input2 = 3;
    const input3 = "-";
    const output = calculadora(input1, input2, input3);

    const result = 2;
    expect(output).toEqual(result);
  });

  it("correctly detract numbers that become negative", () => {
    const input1 = 3;
    const input2 = 5;
    const input3 = "-";
    const output = calculadora(input1, input2, input3);

    const result = -2;
    expect(output).toEqual(result);
  });

  it("correctly multiply numbers", () => {
    const input1 = 3;
    const input2 = 5;
    const input3 = "*";
    const output = calculadora(input1, input2, input3);

    const result = 15;
    expect(output).toEqual(result);
  });

  it("correctly multiply numbers by 0", () => {
    const input1 = 3;
    const input2 = 0;
    const input3 = "*";
    const output = calculadora(input1, input2, input3);

    const result = 0;
    expect(output).toEqual(result);
  });

  it("correctly divide numbers", () => {
    const input1 = 3;
    const input2 = 3;
    const input3 = "/";
    const output = calculadora(input1, input2, input3);

    const result = 1;
    expect(output).toEqual(result);
  });

  it("correctly deny to divide numbers by 0", () => {
    const input1 = 3;
    const input2 = 0;
    const input3 = "/";
    const output = calculadora(input1, input2, input3);

    const result = "cannot divide by 0!";
    expect(output).toEqual(result);
  });

  it("denies operators that are not +, -, * or /", () => {
    const input1 = 3;
    const input2 = 0;
    const input3 = "1";
    const output = calculadora(input1, input2, input3);

    const result = "invalid operator";
    expect(output).toEqual(result);
  });

  it("denies operators that are not +, -, * or /", () => {
    const input1 = 3;
    const input2 = 0;
    const input3 = 1;
    const output = calculadora(input1, input2, input3);

    const result = "invalid operator";
    expect(output).toEqual(result);
  });

  it("denies operators that are not +, -, * or /", () => {
    const input1 = 3;
    const input2 = 0;
    const input3 = "[";
    const output = calculadora(input1, input2, input3);

    const result = "invalid operator";
    expect(output).toEqual(result);
  });

  //quer ver um negocio doido?
});