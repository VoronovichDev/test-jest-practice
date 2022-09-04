const caesarCipher = require('../code/caesarCipher')

describe('caesarCipher func', () => {
   test('default string', () => {
      expect(caesarCipher('abcd')).toBe('bcde')
   })
   test('string with capital letters', () => {
      expect(caesarCipher('aBcD')).toBe('bCdE')
   })
   test('string with letter "z"', () => {
      expect(caesarCipher('xyzZ')).toBe('yzaA')
   })
   test('string with numbers', () => {
      expect(caesarCipher('qwer123')).toBe('rxfs123')
   })
   test('string with punctuation and spaces', () => {
      expect(caesarCipher('ab! ab? ab. ab, ab- ab: ab;')).toBe('bc! bc? bc. bc, bc- bc: bc;')
   })
})