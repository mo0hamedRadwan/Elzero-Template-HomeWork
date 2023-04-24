// https://elzero.org/javascript-bootcamp-assignments-lesson-from-018-to-022

// Replace ? With Arithmetic Operators
console.log(10 * 20 + 15 % 3 - 190 - 10 % 400); // 0
// The Same Result Using The Arthmetic Operators Priority 
console.log((10 * 20) + (15 % 3) - (190 + (10 % 400))); // 0

// =============================================

let num1 = 3;

// Solution One
console.log(num1 + true + true + true); // 6

// Solution Two
console.log(num1 + num1 + false); // 6

// Soultion Three
console.log(num1 + num1); // 6

// Soultion Four
console.log(num1 + num1 + true - true); // 6

// Solution Five
console.log(num1 + num1 + true - true + false); // 6

// Solution Six
console.log(num1 + num1 + false + false); // 6

// =============================================

let num2 = "10";

// Solution One
console.log(+num2 + +num2); // 20

// Solution Two
console.log(num2 - -num2); // 20

// Solution Three
console.log(num2 - -Number(num2)); // 20

// Solution Four
console.log(Number(num2) + +num2); // 20