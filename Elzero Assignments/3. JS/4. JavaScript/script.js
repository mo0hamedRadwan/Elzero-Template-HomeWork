// https://elzero.org/javascript-bootcamp-assignments-lesson-from-023-to-026/
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1_00000); // 100000
console.log(10_0000); // 100000
console.log(1000_00); // 100000
console.log(10000_0); // 100000
console.log(10_00_00); // 100000
console.log(1_00_00_0); // 100000
console.log(1e2 * 1e3); // 100000
console.log(1e1 * 1e4); // 100000
console.log(10_0_0_0_0); // 100000
console.log(1_0_0_0_0_0); // 100000

// ===========================================

console.log(-Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);

// ===========================================

let myVar = "100.56789 Views";
let intVar = parseInt(myVar);
let floatVar = +parseFloat(myVar).toFixed(2);
console.log(intVar + " " + typeof intVar); // 100
console.log(floatVar + " " + typeof floatVar); // 100.57

// ===========================================
let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

// ===========================================

let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(flt.toFixed(0)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.ceil(flt)); // 11

// ===========================================

console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4