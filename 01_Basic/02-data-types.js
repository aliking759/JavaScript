"use strict";

alert(35 + 35); //  alert use kr k app apnay browser kay andar ik alert show krwa saktay hain or is say ye malume kr saktay hain k ap ka code chall raha hai ya ni

document.write(35 + 35);

console.log(35 + 35);

//  Data types 8 tarha kay hotay hain
// 1 Numbers = 1 2  3 4 5  6 7 8
// 2 String = ""
// 3 Boolean= ture/ false
// 4 Bigint = big 12345678987766
// 5 Undefined = khali undefined
// 6 Symbal = unique
// 7 Null = is ka matlab ye hai k jab koi banda ap ko whatsapp pr msg send krta hai or wo ap tak ni ata ab ap us ko ye bol saktay hain k null matlab us ka msg ap tak puncha hi ni hai ok
// 8 Object =

// Numbers:
let length = 16;
let weight = 7.5;
console.log(length);
console.log(weight);
console.log(typeof 16); // is ki type number hogi agar ye "16" es tarha hoo to es ki type kia ho gi bataoo

// Strings:
let color = "Yellow";
let lastName = "Johnson";
console.log(color);
console.log(lastName);
console.log(typeof "Yellow"); // is ki type string hogi
document.write(typeof "Yellow"); // is tarha app apnay browser ma dakh saktay hoo
console.log(typeof null); // is ki type object hogi
console.log(typeof undefined); // is ki type undefined hogi

// Booleans ye booleans ki ik meesal hai
let x = true;
let y = false;

// Object:
// is tarha say hum object likh saktay hain  ye three mesalain object ki hain or ye bahot hi zayada use hota hai
const person = { firstName: "John", lastName: "Doe" }; // simple object ko estarha  use krtay hain

// Array object:
const cars = ["Saab", "Volvo", "BMW"]; // ye Array object hai

// Date object:
const date = new Date("2022-03-25");
