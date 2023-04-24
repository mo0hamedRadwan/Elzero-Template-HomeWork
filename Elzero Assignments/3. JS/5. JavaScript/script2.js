// https://elzero.org/javascript-numbers-from-variables/

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
let mn = Math.min(a , b , c , d);
console.log(mn.toFixed(0)); // 2

// Use Variables a + d One Time To Get The Needed Output
console.log(a * (d * 40 + 4)); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(parseInt(d));   // 2
console.log(Math.floor(d)); // 2
console.log(Math.round(d)); // 2
console.log(Math.trunc(d)); // 2
console.log(d.toFixed(0)); // 2

// Use Variables b + d To Get This Valus
let result = ((parseInt(b) - 24) + d * 10) / 3;
console.log(result.toFixed(2)); // 66.67 => String
console.log(Math.round(result)); // 67 => Number