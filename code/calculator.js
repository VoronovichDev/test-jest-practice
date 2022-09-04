class Calculator {
   static add = (a, b) => a + b;
   static subtract = (a, b) => a - b;
   static divide = (a, b) => {
      return (b === 0) ? undefined : a / b;
   }
   static multiply = (a, b) => a * b;
}

module.exports = Calculator;
