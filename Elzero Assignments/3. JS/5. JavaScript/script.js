// https://elzero.org/javascript-bootcamp-assignments-lesson-from-027-to-030/
let userName = "Elzero";
console.log(userName[0]); // e
console.log(userName.charAt(0)); // e
console.log(userName.substring(0,1)); // e
console.log(userName.slice(0,1)); // e
console.log(); // e
console.log(userName.charAt(0).repeat(3)); // eee

// =================================================

// Anothor Solution

let user_name = "Elzero";
console.log(user_name[user_name.indexOf('e')]); // e
console.log(user_name[user_name.lastIndexOf('e')]); // e
console.log(user_name.substring(3,4)); // e
console.log(user_name.slice(3,4)); // e
console.log(user_name.charAt(3)); // e
console.log(user_name.charAt(3).repeat(3)); // eee

// =================================================

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True