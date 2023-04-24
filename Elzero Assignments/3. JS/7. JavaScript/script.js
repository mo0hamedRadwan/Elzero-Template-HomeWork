// https://elzero.org/javascript-bootcamp-assignments-lesson-from-033-to-037/

// Test Case 1
let num1 = 9; // "009"

// Test Case 2
let num2 = 20; // "020"

// Test Case 3
let num3 = 110; // "110"

if(num1 < 10){
   console.log("00" + num1);
}else if(num1 > 10 && num1 < 100){
   console.log("0" + num1);
}else if(num1 >= 100){
   console.log(num1);
}

// =======================================

let num = 9;
let str = "9";
let str2 = "20";

console.log(`${num} Is The Same Value As ${str} : ${num == str}`);
console.log(`${num} Is The Same Value As ${str} But Not The Same Type : ${num !== str}`);
console.log(`${num} Is Not The Same Value Or The Same Type As ${str2} : ${num !== str2}`);
console.log(`${str} Is The Same Type As ${str2} But Not The Same Value : ${str !== str2}`);

// =======================================

let num_1 = 10;
let num_2 = 30;
let num_3 = "30";

if(num_1 < num_2 && num_2 !== num_3){
   console.log("30 Is Larger Than 10 And Type string Not The Same Type As number");
}
if(num_1 < num_2 && num_2 == num_3 && num_2 !== num_3){
   console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
}
if(num_1 !== num_3 && num_2 !== num_3){
   console.log(`${num_3} Value And Type Is Not The Same As ${num_1} And Type Is Not The Same As ${num_2}`);
}

// =======================================

// Edit What You Want Here

let num01 = 2;
let num02 = 1;
let num03 = 2;
let num04 = "24";

/*
Do Not Edit Below This Line
Needed Output
True 7 Times
*/

// Condition 1

if (num01 > num02) {
   console.log("True");
} else {
   console.log("False");
}

// Condition 2

if (num01 > num02 && num01 < num04) {
   console.log("True");
} else {
   console.log("False");
}

// Condition 3

if (num01 > num02 && num01 === num03) {
   console.log("True");
} else {
   console.log("False");
}

// Condition 4

if ((num01 + num02) < num04) {
   console.log("True");
} else {
   console.log("False");
}

// Condition 5

if ((num01 + num03) < num04) {
   console.log("True");
} else {
   console.log("False");
}

// Condition 6

if ((num01 + num02 + num03) < num04) {
   console.log("True");
} else {
   console.log("False");
}

// Condition 7

if (num04 - (num01 + num03) + num02 === 21) {
   console.log("True");
} else {
   console.log("False");
}