function caesarCipher(str) {

   let encodedStr = []

   for (let i = 0; i < str.length; i++) {

      if (str.charCodeAt(i) === 122) {
         encodedStr.push(String.fromCharCode(97));
      } else if (str.charCodeAt(i) === 90) {
         encodedStr.push(String.fromCharCode(65));
      } else if (str.charCodeAt(i) === 33 || str.charCodeAt(i) === 32
         || str.charCodeAt(i) === 63 || str.charCodeAt(i) === 44
         || str.charCodeAt(i) === 45 || str.charCodeAt(i) === 46
         || str.charCodeAt(i) === 58 || str.charCodeAt(i) === 59
         || str.charCodeAt(i) === 48 || str.charCodeAt(i) === 49
         || str.charCodeAt(i) === 50 || str.charCodeAt(i) === 51
         || str.charCodeAt(i) === 52 || str.charCodeAt(i) === 53
         || str.charCodeAt(i) === 54 || str.charCodeAt(i) === 55
         || str.charCodeAt(i) === 56 || str.charCodeAt(i) === 57) {
         encodedStr.push(String.fromCharCode(str.charCodeAt(i)));
      } else {
         encodedStr.push(String.fromCharCode(str.charCodeAt(i) + 1));
      }

   }
   return (encodedStr.join(''))
}
module.exports = caesarCipher