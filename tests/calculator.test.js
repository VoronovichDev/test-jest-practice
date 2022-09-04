const Calculator = require('../code/calculator')

describe('Calculator func', () => {
   test('add positive numbers', () => {
      expect(Calculator.add(9, 14)).toBe(23)
   });
   test('add negative numbers', () => {
      expect(Calculator.add(-1, 20)).toBe(19)
   });
   test('add float numbers', () => {
      expect(Calculator.add(0.1, 0.2)).toBeCloseTo(0.3)
   });
   test('subtract positive numbers', () => {
      expect(Calculator.subtract(14, 9)).toBe(5)
   });
   test('subtract negative numbers', () => {
      expect(Calculator.subtract(-1, 20)).toBe(-21)
   });
   test('subtract float numbers', () => {
      expect(Calculator.subtract(0.1, 0.2)).toBe(-0.1)
   });
   test('divide positive numbers', () => {
      expect(Calculator.divide(10, 2)).toBe(5)
   });
   test('divide result float number', () => {
      expect(Calculator.divide(1, 3)).toBeCloseTo(0.3333)
   });
   test('division by zero', () => {
      expect(Calculator.divide(1, 0)).toBe(undefined)
   });
})