const analyzeArray = require('../code/analyzeArray')

describe('AnalyzeArray func', () => {
   test('filled array', () => {
      expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
         max: 5,
         min: 1,
         length: 5,
         average: 3
      })
   });
   test('empty array', () => {
      expect(analyzeArray([])).toBeNull()
   })
})