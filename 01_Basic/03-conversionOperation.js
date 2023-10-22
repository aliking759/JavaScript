//------------ value malume karnay ka tareka --------------//

//------------ Converting number to string and string to number --------------//

let age = 22;
let newAge = "22";

let ali = undefined; // is ki type undefined hi ap ko out put ma nazar aaay gi

let price = null; // null ki type hai object

let king = true; // ture or false dono ki type boolean hai

let mahi = false;

console.log(typeof age); //es ki type too number hai

console.log(typeof newAge); // but jo b "" in columes k andar hogi cahay wo "22" ya "name" ho us ki type string hi hoo gi

console.log(typeof price); // null ki type hai object

console.log(typeof ali); // is ki type undefined hi ap ko out put ma nazar aaay gi

console.log(typeof king); // ture or false dono ki type boolean hai
console.log(typeof mahi);

//ab hum ye daykhain gay k string ko number or number ko string ma kasay convert krtay hain ok

// 1: ye hum nay dakha k number ko string ma ksay convert krtay hain
let valueInString = String(age);
console.log(typeof valueInString);
document.write(typeof valueInString);

// 2: ye hum nay dakha k string ko number ma ksay convert krtay hain
let valueInNumber = Number(newAge);
console.log(typeof valueInNumber);
document.write(typeof valueInNumber);

//------------ Ture and False--------------//
// true ka matlab hota hai 1
// false ka matlab hota hai 0
// or in dono ki type boolean hoti hai
// convert parictice

// let isLogIn = 1;  // out put ture
// let isLogIn = 0; // out put false
// let isLogIn = ""; // out put false
let isLogIn = "Ali"; // out put ture

let booleanIsLogIn = Boolean(isLogIn);
document.write(booleanIsLogIn);
console.log(booleanIsLogIn);
