const reverseString = require('../code/reverseString')

describe('ReverseString func', () => {
   test('reverse solo string', () => {
      expect(reverseString('string')).toBe('gnirts')
   });
   test('reverse multi string', () => {
      expect(reverseString('str stri string')).toBe('gnirts irts rts')
   });
   test('blank string', () => {
      expect(reverseString('')).toBe('')
   });
   test('numbers and punctuation', () => {
      expect(reverseString('12a! 34b?')).toBe('?b43 !a21')
   })
   test('undefined arg', () => {
      expect(reverseString()).toBe('');
   });
   test("null", () => {
      expect(reverseString(null)).toBe('');
   });
})