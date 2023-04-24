// https://elzero.org/javascript-condition-met-challenge/

let st = "Elzero Web School";
let idx  = st.indexOf("w") == -1 ? st.indexOf("W") : st.indexOf("w");
if (st[idx].toLowerCase() === "w") {
   console.log("Good");
}

if (st.split(" ") !== "string") {
   console.log("Good");
}

if (typeof(st.length) === "number") {
   console.log("Good");
}

if (st.slice(0,6).repeat(2) === "ElzeroElzero") {
   console.log("Good");
}