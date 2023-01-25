const Calculator = require('../calculator');

describe('Calculator', () => {
  it('should perform the correct calculations', () => {
    const calculator = new Calculator();
    expect(calculator.add(5).subtract(2).multiply(3).result).toEqual(9);
    expect(calculator.add(2).result).toEqual(11);
  });
});
