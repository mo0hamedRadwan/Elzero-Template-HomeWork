// https://elzero.org/javascript-plus-and-minus-puzzle/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);

/*
   Examples: 1
   [++a]
   - Value: 11
   - Explain: Pre Increment Operator
   [+]
   - Explain: Addition Operator

   [+b]
   - Value: 20
   - Explain: Unary Operator
   [b++]
   - Value: 20    ==> 21
   - Explain: Post Increment Operator
   [+]
   - Explain: Addition Operator

   [+c]
   - Value: 80
   - Explain: Unary Operator
   [c++]
   - Value: 80    ==> 81
   - Explain: Post Increment Operator
   [+]
   - Explain: Addition Operator

   [+a]
   - Value: 11
   - Explain: Unary Operator
   [a++]
   - Value: 11    ==> 12
   - Explain: Post Increment Operator

   Statement Now = 11 + 20 + 80 + 11 = 100  ## Result
   Variable Value After Statment :
   a = 12 , b = 21 , c = 81
*/

// console.log(a + " " + b + " " + c);
console.log(++a + -b + +c++ - -a++ + +a);

/*
   Examples: 2
   [++a]
   - Value: 13
   - Explain: Pre Increment Operator
   [+]
   - Explain: Addition Operator

   [-b]
   - Value: -21
   - Explain: Unary Operator
   [+]
   - Explain: Addition Operator

   [+c]
   - Value: 81
   - Explain: Unary Operator
   [c++]
   - Value: 81    ==> 82
   - Explain: Post Increment Operator
   [-]
   - Explain: Subtraction Operator

   [-a]
   - Value: -13
   - Explain: Unary Operator
   [a++]
   - Value: -13   ==> 14
   - Explain: Post Increment Operator
   [+]
   - Explain: Addition Operator

   [+a]
   - Value: -14
   - Explain: Unary Operator

   Statement Now = 13 + -21 + 81 - -13 + 14 = 100  ## Result
   Variable Value After Statment :
   a = 14 , b = 21 , c = 82
*/

// console.log(a + " " + b + " " + c);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
   Examples: 3
   [--c]
   - Value: 81
   - Explain: Pre Decrement Operator
   [+]
   - Explain: Addition Operator

   [+b]
   - Value: 21
   - Explain: Unary Operator
   [+]
   - Explain: Addition Operator

   [--a]
   - Value: 13
   - Explain: Pre Increment Operator
   [*]
   - Explain: Multiply Operator

   [+b]
   - Value: 21
   - Explain: Unary Operator
   [b++]
   - Value: 21    ==> 22
   - Explain: Post Increment Operator
   [-]
   - Explain: Subtraction Operator

   [+b]
   - Value: 21
   - Explain: Unary Operator
   [*]
   - Explain: Multiply Operator

   [a]
   - Value: 13
   [+]
   - Explain: Addition Operator

   [--a]
   - Value: 13    ==> 12
   - Explain: Pre Decrement Operator
   [+]
   - Explain: Addition Operator

   [+true]
   - Value: 1
   - Explain: Unary Operator

   Statement Now = 81 + 21 + 13 * 21 - 22 * 13 + 12 - +1
   Statement Now = 81 + 21 + (13 * 21) - (22 * 13) + 12 - 1 = 100  ## Result
   Variable Value After Statment :
   a = 12 , b = 22 , c = 81
*/

// console.log(a + " " + b + " " + c);