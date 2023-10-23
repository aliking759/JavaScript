//  use let and const  not using var

const a = 34;
let b = 50;
if (true) {
  const a = 14;
  let b = 89;
  console.log("INNER:", a, b);
}
console.log(a);
console.log(b);

function One() {
  username: "Ali";
  function Two() {
    const website = "studentera.org";

    console.log(Two);
    console.log(username);
    Two();
  }
}
console.log(One);
One();

//~~~~~~~~~~~~~~~~~~~~~~~~~~`````  Intresting   ~~~~~~~~~~~~~~~`

console.log(Addone(6));
function Addone(params) {
  return params + 1;
}

console.log(Addone(6));
const Addtwo = function (params) {
  return params + 3;
};
// function Addtwo(params2) {
//     return params2 +8

// }
