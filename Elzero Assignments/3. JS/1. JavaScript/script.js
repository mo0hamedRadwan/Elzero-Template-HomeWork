// https://elzero.org/javascript-bootcamp-assignments-lesson-from-001-to-009/
document.write(`<h1 style="
color:blue;
font-size:80px;
font-weight:bold;
text-align:center;
font-family:arial;">
Elzero</h1>`)

// Anthor Way
/*
var element = document.createElement("h1");
element.style.color = "blue";
element.style.fontSize = "80px";
element.style.fontWeight = "bold";
element.style.textAlign = "center";
element.style.fontFamily = "arial";
element.innerHTML = "Elzero";

document.body.appendChild(element);
*/

console.log("%cElzero %cWeb %cSchool",
"color:red;font-weight:bold;font-size:40px", 
"color:green;font-weight:bold;font-size:40px", 
"color:white;background-color:blue;font-weight:bold;font-size:40px");

// Console Group
console.group("Group 1");     // Open Group
console.log("Message One");   // Print log Message In Group   
console.log("Message Two");
console.group("Child Group"); // Open Child Group (Nested Group)
console.log("Message One");   // Print Log Message In Child Group
console.log("Message Two");
console.group("Grand Child Group"); // Open Grand Child Group in Group
console.log("Message One");         // Print Message In Grand Child Group
console.log("Message Two");
console.groupEnd();                 // Close Grand Child Group
console.groupEnd();                 // Close Child Group
console.groupEnd();                 // Close Group
console.group("Group 2");           // Open Anthor Group
console.log("Message One");         // Print Message In Anthor Group
console.log("Message Two");
console.groupEnd();                 // Close Anthor Group

// Create Table in Console
console.table(["Elzero" , "Ahmed" , "Sameh" , "Gamal" , "Aya"]);

// Create Comments 

// console.log("Iam In Console");
// document.write("Iam In Page");

/*
console.log("Iam In Console");
document.write("Iam In Page");
*/