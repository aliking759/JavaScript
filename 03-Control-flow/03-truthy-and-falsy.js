// Falsy values
// false (0), (-0), (Bigint on), (null), ( undefined), (""), (NaN)

// truthy values
// true ("0"), (" "), ("false"), ({}), ([]), (function() {})

let userEmail = [];
if (userEmail.length === 0) {
  console.log("userEmail is empty");
}

let emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing Operators (??): null and undefined

// this is new Operator
let vall;
// vall = 5 ?? 15; // Output 5
// vall = null ?? 10; // Output 10
// vall = undefined ?? 15; // Output 15
vall = undefined ?? 30 ?? 40; // Output 30
console.log(vall);

// Terniary operators
// Condition ? true:false

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("less then 80") : console.log("more then 80");
