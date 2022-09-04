function analyzeArray(arr) {

   if (arr.length === 0) {
      return null
   }

   const max = Math.max(...arr)
   const min = Math.min(...arr)
   const length = arr.length
   const average = arr.reduce((prev, cur) => prev + cur, 0) / arr.length

   return { max, min, length, average }

}

module.exports = analyzeArray