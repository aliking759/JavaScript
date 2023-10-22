//***************   String    ***************** */
// falow this
let name = "ali";
let age = 22;
let city = "lahore";
console.log(`my name is ${name} my age is ${age} and my city is ${city}`);

let firstName = String("aliking");

console.log(firstName.length); // length maloom krnay k leay

console.log(firstName.toLocaleUpperCase()); // Upper case may convert krnay k leay

console.log(firstName.toLocaleLowerCase()); // Lower case may convert krnay k leay

console.log(firstName.indexOf("k"));
console.log(firstName.charAt(2));

const StringOne = "     aliking       ";
console.log(StringOne); // only stringone is not removing space
console.log(StringOne.trim()); // ues trim and remove the all space

const Url = "heroki467@gmail.com20%ali";
console.log(Url.replace("20%", "."));
