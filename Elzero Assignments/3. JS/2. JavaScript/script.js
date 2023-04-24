// https://elzero.org/javascript-bootcamp-assignments-lesson-from-010-to-017
var number_one = 10;
var number_two = 20;

let strNum1 = number_one.toString();  // This Equal ""+number_one
let strNum2 = number_two.toString();  // This Equal number_two+""
let result1 = strNum1 + strNum2;
let result2 = `${number_one}${number_two}`;

console.log(result1);
console.log(typeof result1);

console.log(result2);
console.log(typeof result2);

console.log(strNum2 + "\n" + strNum1);
console.log(`${number_two}\n${number_one}`);

// ================================================================

// Id in HTML Create Variable Type of object
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

console.log(`I'm In
\\
Love \\ """ '''
++ With ++
\\"""\\"""
""JavaScript""`);

console.log("I'm In\n\\\nLove \\ \"\"\" '''\n++ With ++\n\\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"");

// ===================================================================

let a = 21;
let b = 20;

console.log("_" + a + ("_" + b + a).repeat(3) + "_" + b + "_");