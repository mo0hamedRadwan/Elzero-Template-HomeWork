// https://elzero.org/javascript-bootcamp-assignments-lesson-from-038-to-039/

let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
day = day.replace(/ /g , ''); /// Remove All White Spaces.
day = day.trim() /// Remove Leading Space in Start & End.
day = day.charAt(0).toUpperCase() + day.substring(1);

switch(day){
   case "Friday":
   case "Saturday":
   case "Sunday":
      console.log("No Appointments Available");
      break;
   case "Monday":
   case "Thursday":
      console.log("From 10:00 AM To 5:00 PM");
      break;
   case "Tuesday":
      console.log("From 10:00 AM To 7:00 PM");
      break;
   case "Wednesday":
      console.log("From 10:00 AM To 7:00 PM");
      break;
   default:
      console.log("Its Not A Valid Day");
      break;
}


// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// // Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// // Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// // Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// // Output => "Its Not A Valid Day"