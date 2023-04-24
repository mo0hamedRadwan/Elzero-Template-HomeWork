// https://elzero.org/javascript-string-manipulation/

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
let word = "zero";

console.log(a.charAt(2).toUpperCase() + a.slice(3,6));

let result = a.charAt(a.indexOf(word)).toUpperCase() + a.slice(a.indexOf(word) + 1 , a.indexOf(word) + word.length);
console.log(result); // Zero


//=================================================

// 8 H
console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

//=================================================

// Return Array
console.log(a.split(" " , 1)); // ["Elzero"]

//=================================================

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substring(0 , 7)}${a.substring(11)}`); // Elzero School

console.log(a.substring(0 , 7) + a.substring(11)); // Elzero School

//=================================================

// Solution Must Be Dynamic Because String May Changes
let str  = a.charAt(0).toLowerCase() 
         + a.toUpperCase().substring(1 , a.length - 1) 
         + a.charAt(a.length - 1).toLowerCase();
console.log(str); // eLZERO WEB SCHOOl