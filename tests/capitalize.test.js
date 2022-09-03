const capitalize = require('../code/capitalize')

describe('Capitalize func', () => {
   test('starts with small letter', () => {
      expect(capitalize('string')).toBe('String');
   });
   test('random letters', () => {
      expect(capitalize('sTrInG')).toBe('String');
   });
   test('empty string', () => {
      expect(capitalize('')).toBe('');
   });
   test('all symbols are capital', () => {
      expect(capitalize('STRING')).toBe('String');
   });
   test('undefined arg', () => {
      expect(capitalize()).toBe('');
   });
   test("null", () => {
      expect(capitalize(null)).toBe('');
   });
});