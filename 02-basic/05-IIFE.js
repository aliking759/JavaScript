// Immediately Invoked Function Expression ( IIFE )

// global scope kay polution  say problem hoti hai kai bar to us global scope kay polution say bachnay kayleay ( IIFE ) ka use hota hai
(function iife() {
  // This function is named iife
  console.log(`To Be Connected`);
})();
((name) => {
  // This function is simple iife
  console.log(`To Be Connected  ${name}`);
})("Ali");

/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~  Functions   `````````````````````````
function one() {
  console.log(one);
  two();
}

function two() {
  console.log(two);
  three();
}
function three() {
  console.log(three);
}

one();
two();
three();
