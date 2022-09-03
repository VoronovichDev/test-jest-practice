function capitalize(str) {
   if (!str) return "";
   const firstLetter = str.substring(0, 1).toUpperCase();
   const restLetters = str.slice(1).toLowerCase()
   return firstLetter + restLetters
}

module.exports = capitalize