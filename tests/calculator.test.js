const { add, subtract, multiply, divide } = require('../src/calculator');

describe('Calculator', () => {
  test('should add two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('should subtract two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test('should multiply two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test('should divide two numbers', () => {
    expect(divide(6, 3)).toBe(2);
  });

  test('should handle division by zero', () => {
    expect(() => divide(1, 0)).toThrow('Cannot divide by zero');
  });
});
